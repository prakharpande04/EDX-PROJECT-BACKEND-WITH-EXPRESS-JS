import { Router } from "express";
import auth from "../Middleware/auth.js";
import {
  addReview,
  getReview,
  deleteReview,
} from "../Controllers/ReviewController.js";

const router = Router();

// registered users
router.put("/books/:id/reviews", auth, addReview);
router.delete("/books/:id/reviews", auth, deleteReview);

// general users
router.get("/books/:id/reviews", getReview);

export default router;
