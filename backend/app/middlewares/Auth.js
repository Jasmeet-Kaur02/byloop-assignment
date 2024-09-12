const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Unauthenticated",
        });
      } else {
        req.userId = payload.id;
        next();
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Unauthenticated",
    });
  }
};

module.exports = Auth;
