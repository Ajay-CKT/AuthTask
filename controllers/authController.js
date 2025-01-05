const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRETKEY = require("../utils/config");

const authController = {
  register: async (request, response) => {
    try {
      const { userName, email, password } = request.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        response
          .status(409)
          .json({ message: "User already exits! Duplicate entries.." });
      } else {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
          userName,
          email,
          password: passwordHash,
        });
        await newUser.save();
        response.status(201).json({ message: "User registered successfully" });
      }
    } catch (error) {
      response.status(500).json({ ERROR: error.message });
    }
  },

  login: async (request, response) => {
    try {
      const { email, password } = request.body;

      const user = await User.findOne({ email });
      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return response.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user._id }, `${SECRETKEY}`, {
        expiresIn: "1h",
      });
      response
        .status(200)
        .json({ token: token, message: "Logged in successfully" });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },

  me: async (request, response) => {
    try {
      const userId = await request.userId;
      const user = await User.findById(userId).select(
        "-password -__v -createdAt -updatedAt"
      );
      response.status(200).json({ message: "User data fetched", User: user });
    } catch (error) {
      response.status(500).json({ ERROR: error.message });
    }
  },
};

module.exports = authController;
