const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/userschema");

async function register(req, res) {
  try {
    const { username, password } = req.body;

    // Check if the username is already registered
    const foundUser = await User.findOne({ username });
    if (foundUser) {
      return res.json({ message: "This user is already registered!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Create a JWT token for the user
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "User registered successfully!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const registeredUser = await User.findOne({ username });
    if (!registeredUser) {
      return res.json({ message: "Invalid Credentials!" });
    }

    // Check if the password is correct
    const isMatched = await bcrypt.compare(password, registeredUser.password);
    if (!isMatched) {
      return res.json({ message: "Invalid Credentials!" });
    }

    // Create a JWT token for the user
    const token = jwt.sign(
      { userId: registeredUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ message: "User logged in successfully!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

module.exports = {
  register,
  login,
};
