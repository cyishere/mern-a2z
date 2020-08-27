/*
 * @Author: chen yang
 * @Date: 2020-08-27 14:38:32
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 20:43:05
 */
import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateBookInfo = () => {
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log("Error from UpdateBookInfo");
      });
  }, [id]);

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      ...book,
    };

    axios
      .put(`http://localhost:8082/api/books/${id}`, data)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        console.log("Error from UpdateBookInfo_handleSubmit");
      });
  };

  return (
    <div className="container">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <h1 className="title">Edit Book</h1>
            <p className="lead text-center">Update Book's Info</p>
          </div>
        </div>

        <div className="level-right">
          <Link to="/" className="button is-warning">
            Show Book List
          </Link>
        </div>
      </nav>

      <section className="section">
        <form noValidate onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="title">
              Title
            </label>
            <div className="control">
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="input"
                value={book.title}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="isbn">
              ISBN
            </label>
            <div className="control">
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="input"
                value={book.isbn}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="author">
              Author
            </label>
            <div className="control">
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="input"
                value={book.author}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="description">
              Description
            </label>
            <div className="control">
              <textarea
                type="text"
                placeholder="Describe this book"
                name="description"
                className="textarea"
                value={book.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="published_date">
              Published Date
            </label>
            <div className="control">
              <input
                type="date"
                placeholder="published_date"
                name="published_date"
                className="input"
                value={book.published_date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="publisher">
              Publisher
            </label>
            <div className="control">
              <input
                type="text"
                placeholder="Publisher of this Book"
                name="publisher"
                className="input"
                value={book.publisher}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="control">
            <button
              type="submit"
              className="button is-info is-fullwidth is-large"
            >
              Update Book
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateBookInfo;
