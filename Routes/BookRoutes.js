const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  addBook,
  getBooksByISBN,
  getBooksByTitle,
  getBooksByAuthor,
} = require("../Controllers/BookController");

router.get("/books", getAllBooks);
router.get("/books/byISBN", getBooksByISBN);
router.get("/books/byTitle", getBooksByTitle);
router.get("/books/byAuthor", getBooksByAuthor);
router.post("/books", addBook);

module.exports = router;
