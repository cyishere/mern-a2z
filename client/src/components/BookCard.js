/*
 * @Author: chen yang
 * @Date: 2020-08-27 14:36:49
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 20:36:22
 */
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3"
              alt=""
            />
          </figure>
        </div>
        <div className="card-content">
          <h2 className="title">
            <Link to={`/show-book/${book._id}`}>{book.title}</Link>
          </h2>
          <h3 className="subtitle">{book.author}</h3>
          <div className="content is-small">{book.description}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
