const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

module.exports = app;
