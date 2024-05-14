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
router.post("/books/byISBN", getBooksByISBN);
router.post("/books/byTitle", getBooksByTitle);
router.post("/books/byAuthor", getBooksByAuthor);
router.post("/books", addBook);

module.exports = router;
