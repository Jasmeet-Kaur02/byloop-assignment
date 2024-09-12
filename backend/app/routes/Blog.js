const BlogRouter = require("express").Router();
const { create, update, remove, get } = require("../controllers/Blog");
const Auth = require("../middlewares/Auth");
const customValidation = require("../middlewares/validation");
const {
  createValidation,
  updateValidation,
  deleteValidation,
} = require("../validators/Blog");

BlogRouter.post("/", Auth, customValidation(createValidation), create);
BlogRouter.put("/:blogId", Auth, customValidation(updateValidation), update);
BlogRouter.delete("/", Auth, customValidation(deleteValidation), remove);
BlogRouter.get("/", Auth, get);

module.exports = BlogRouter;
