/*
 * @Author: chen yang
 * @Date: 2020-08-27 14:15:29
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 20:43:56
 */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const CreateBook = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...newBook,
    };

    axios
      .post("http://localhost:8082/api/books", data)
      .then((response) => {
        setNewBook({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
        });
        history.push("/");
      })
      .catch((error) => {
        console.log("Error in CreateBook");
      });
  };
  return (
    <div className="container">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <h1 className="title">Add Book</h1>
            <p className="lead text-center">Create new book</p>
          </div>
        </div>

        <div className="level-right">
          <Link to="/" className="level-item button is-link">
            Show BooK List
          </Link>
        </div>
      </nav>
      <section className="section">
        <form noValidate onSubmit={handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="input"
                value={newBook.title}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="input"
                value={newBook.isbn}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="input"
                value={newBook.author}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <textarea
                type="text"
                placeholder="Describe this book"
                name="description"
                className="textarea"
                value={newBook.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                type="date"
                placeholder="published_date"
                name="published_date"
                className="input"
                value={newBook.published_date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                type="text"
                placeholder="Publisher of this Book"
                name="publisher"
                className="input"
                value={newBook.publisher}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="control">
            <button
              type="submit"
              className="button is-primary is-fullwidth is-large"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateBook;
