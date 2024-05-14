import { Router } from "express";
import {
  getAllBooks,
  addBook,
  getBooksByISBN,
  getBooksByTitle,
  getBooksByAuthor,
} from "../Controllers/BookController";

const router = Router();

router.get("/books", getAllBooks);
router.post("/books/byISBN", getBooksByISBN);
router.post("/books/byTitle", getBooksByTitle);
router.post("/books/byAuthor", getBooksByAuthor);
router.post("/books", addBook);

export default router;
