const AuthRouter = require("express").Router();
const { signin, signup } = require("../controllers/Auth");
const customValidation = require("../middlewares/validation");
const { registerValidation, loginValidation } = require("../validators/Auth");

AuthRouter.post("/register", customValidation(registerValidation), signup);
AuthRouter.post("/login", customValidation(loginValidation), signin);

module.exports = AuthRouter;
