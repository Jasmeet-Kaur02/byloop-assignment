const router = require("express").Router();

const AuthRouter = require("./Auth");
const BlogRouter = require("./Blog");

router.use("/", AuthRouter);
router.use("/blogs", BlogRouter);

module.exports = router;
