const jwt = require("jsonwebtoken");
const SECRETKEY = require("../utils/config");

const auth = {
  verifyLogin: (request, response, next) => {
    const token = request.headers.cookie
      ?.split("; ")
      .find((cookie) => cookie.startsWith("token="))
      .split("=")[1];
    if (!token) return response.status(401).json({ error: "Access denied" });
    try {
      const decoded = jwt.verify(token, `${SECRETKEY}`);
      request.userId = decoded.id;
      next();
    } catch (error) {
      response.status(401).json({ error: "Invalid token" });
    }
  },
};

module.exports = auth;
