// controllers/userController.js

const bcrypt = require("bcryptjs");
const User = require("../Module/User");

// SIGNUP Controller
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  //   Check if all fields are filled
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(409)
        .json({ message: "User already exists. Please login." });
    }

    //  Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅  Save user to database
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // 🎉 Send success response
    res.status(201).json({ message: "Signup successful! You can now log in." });
  } catch (error) {
    console.error("Signup error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// LOGIN Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  //  Check if email and password are right hai
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Please enter both email and password." });
  }

  try {
    // Find karo user ko  by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User not found. Please signup first." });
    }

    // yaha karo Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password. Try again." });
    }

    // Login success
    res.status(200).json({
      msg: "Login successful!",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
  }
};
