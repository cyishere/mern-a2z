/*
 * @Author: chen yang
 * @Date: 2020-08-27 14:37:57
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 20:43:29
 */
import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const ShowBookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log("Error from ShowBookDetails");
      });
  }, [id]);

  const handleDelete = () => {
    console.log("handleDelete actived!");
    axios
      .delete(`http://localhost:8082/api/books/${id}`)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        console.log("Error from ShowBookDetails_handleDelete");
      });
  };

  let BookItem = (
    <div>
      <table className="table is-striped is-narrow is-hoverable is-fullwidth">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{book.title}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{book.author}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{book.isbn}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{book.publisher}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{book.published_date}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{book.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <h1 className="title">Book's Record</h1>
            <p className="lead text-center">View Book's Info</p>
          </div>
        </div>

        <div className="level-right">
          <Link to="/" className="button is-warning">
            Show Book List
          </Link>
        </div>
      </nav>

      <section className="section">{BookItem}</section>

      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <button
              type="button"
              className="button is-danger"
              onClick={handleDelete}
            >
              Delete Book
            </button>
          </div>
        </div>

        <div className="level-right">
          <div className="level-item">
            <Link
              to={`/edit-book/${book._id}`}
              className="button is-primary is-large"
            >
              Edit Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBookDetails;
