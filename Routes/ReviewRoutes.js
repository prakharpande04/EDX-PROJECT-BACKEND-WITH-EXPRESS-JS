const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth.js");
const {
  addReview,
  getReview,
  deleteReview,
} = require("../Controllers/ReviewController.js");

// registered users
router.put("/books/:id/reviews", auth, addReview);
router.delete("/books/:id/reviews", auth, deleteReview);

// general users
router.get("/books/:id/reviews", getReview);

module.exports = router;
