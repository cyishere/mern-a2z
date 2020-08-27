/*
 * @Author: chen yang
 * @Date: 2020-08-27 09:42:15
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 11:00:15
 */
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: String,
  published_date: Date,
  publisher: String,
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
