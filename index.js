const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const BookRoutes = require("./Routes/BookRoutes");
const UserRoutes = require("./Routes/UserRoutes");
const ReviewRoutes = require("./Routes/ReviewRoutes");

const url = process.env.MONGODB_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB Database");

    app.use(BookRoutes);
    app.use(UserRoutes);
    app.use(ReviewRoutes);

    app.listen(8080, () => {
      console.log("Listening on port 8080");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
