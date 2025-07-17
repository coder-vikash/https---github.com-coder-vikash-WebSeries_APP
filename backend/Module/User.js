const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// ✅ This prevents the overwrite error
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
