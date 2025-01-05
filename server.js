const app = require("./app");
const mongoose = require("mongoose");
const { MONGODBURI, PORT } = require("./utils/config");

mongoose
  .connect(MONGODBURI)
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => console.log("Server running..."));
  })
  .catch((error) => console.error("Error connecting to database...", error));
