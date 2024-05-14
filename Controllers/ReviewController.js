const Review = require("../Models/reviewschema");

async function addReview(req, res) {
  try {
    // Data to be stored
    const { user_id } = req.user;
    const book_id = req.params.id;
    const { review_text } = req.body;

    // Check if the review already exists to decide whether to create a new one or update the existing one
    const foundReview = await Review.findOne({ user: user_id, book: book_id });

    if (foundReview) {
      await Review.updateOne({ user: user_id, book: book_id }, { review_text });
      return res.json({ message: `Review added/updated successfully!` });
    }

    // Execute adding review operation
    const newReview = new Review({ user: user_id, book: book_id, review_text });
    await newReview.save();
    res.json({ message: `Review added successfully!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
}

async function getReview(req, res) {
  try {
    const { id } = req.params;
    const bookReview = await Review.find({ book: id }, { review_text: 1 });

    if (!bookReview.length) {
      return res.json({ message: "No review found for this book!" });
    }

    res.json({ message: "Review found for this book", bookReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
}

async function deleteReview(req, res) {
  try {
    const { user_id } = req.user;
    const { id } = req.params;

    const deletedReview = await Review.deleteOne({ user: user_id, book: id });

    if (!deletedReview.deletedCount) {
      return res.json({ message: "No review found for that user to delete!" });
    }

    res.json({ message: "Review deleted for that user successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
}

module.exports = {
  addReview,
  getReview,
  deleteReview,
};
