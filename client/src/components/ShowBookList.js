/*
 * @Author: chen yang
 * @Date: 2020-08-27 14:38:16
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 20:37:03
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BookCard from "./BookCard";

const ShowBookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log("Error from ShowBookList");
      });
  }, []);
  let bookList;

  if (!books) {
    bookList = "There's no book record!";
  } else {
    bookList = books.map((book, index) => <BookCard book={book} key={index} />);
  }
  return (
    <div className="container">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <h1 className="title">Books List</h1>
          </div>
        </div>
        <div className="level-right">
          <Link to="/create-book" className="button is-link level-item">
            + Add New Book
          </Link>
        </div>
      </div>

      <div className="columns">{bookList}</div>
    </div>
  );
};

export default ShowBookList;
