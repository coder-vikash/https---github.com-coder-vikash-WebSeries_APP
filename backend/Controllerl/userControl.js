// controllers/userController.js

const bcrypt = require("bcryptjs");
const User = require("../Module/User"); // ✅ path to your Mongoose model

// ✅ SIGNUP Controller
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  // 🔍 Step 1: Check if all fields are filled
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    // 🔍 Step 2: Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(409)
        .json({ message: "User already exists. Please login." });
    }

    // 🔐 Step 3: Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Step 4: Save user to database
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // 🎉 Step 5: Send success response
    res.status(201).json({ message: "Signup successful! You can now log in." });
  } catch (error) {
    console.error("❌ Signup error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// ✅ LOGIN Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // 🔍 Step 1: Check if email and password are provided
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Please enter both email and password." });
  }

  try {
    // 🔍 Step 2: Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User not found. Please signup first." });
    }

    // 🔐 Step 3: Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password. Try again." });
    }

    // ✅ Step 4: Login success
    res.status(200).json({
      msg: "Login successful!",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("❌ Login error:", error);
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
  }
};
