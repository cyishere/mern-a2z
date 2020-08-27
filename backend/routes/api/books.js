/*
 * @Author: chen yang
 * @Date: 2020-08-27 09:39:50
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 10:58:19
 */
const express = require("express");
const router = express.Router();

const Book = require("../../models/book");

/*
 * @route GET /api/books/test
 * @description tests books route
 * @access Public
 */
router.get("/test", (req, res) => res.send("Book route testing!"));

/*
 * @route GET /api/books
 * @description Get all books
 * @access Public
 */
router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((error) => res.status(404).json({ msg: "No books found..." }));
});

/*
 * @route GET /api/books/:id
 * @description Get single book by id
 * @access Public
 */
router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((error) => res.status(404).json({ msg: "No book found..." }));
});

/*
 * @route POST /api/books
 * @description add/save book
 * @access Public
 */
router.post("/", (req, res) => {
  const book = new Book(req.body);
  book
    .save(req.body)
    .then((book) => res.json(book))
    .catch((error) => {
      // console.error(error.message);
      res.status(400).json({ msg: "Unable to add this book..." });
    });
});

/*
 * @route PUT /api/books/:id
 * @description Update a single book
 * @access Public
 */
router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json(book))
    .catch((error) => {
      console.error(error);
      res.status(400).json({ msg: "Unable to update this book..." });
    });
});

/*
 * @route DELETE /api/books/:id
 * @description Delete book by id
 * @access Public
 */
router.delete("/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then((book) => res.json({ msg: "The book is successfully deleted!" }))
    .catch((error) => res.status(404).json({ msg: "No such a book" }));
});

module.exports = router;
