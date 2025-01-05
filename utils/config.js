require("dotenv").config();

const MONGODBURI = process.env.MONGODBURI;
const PORT = process.env.PORT;
const SECRETKEY = process.env.SECRETKEY;

module.exports = { MONGODBURI, PORT, SECRETKEY };
