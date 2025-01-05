const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userScheme, "users");
