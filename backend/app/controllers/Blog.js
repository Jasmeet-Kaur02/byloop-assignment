const Blog = require("../database/schemas/blogs");

const create = async (req, res) => {
  const body = req.body;
  const blog = await Blog.create(body);

  return res.status(200).json({
    data: blog,
    message: "Blog has been created.",
    status: true,
  });
};

const update = async (req, res) => {
  const body = req.body;

  const blog = await Blog.findById(body.blogId);

  Object.keys(body).forEach((key) => {
    if (body[key] != null && key != "blogId") {
      blog[key] = body[key];
    }
  });
  await blog.save();

  return res.status(200).json({
    data: blog,
    message: "Blog has been udpated.",
    status: true,
  });
};

const remove = async (req, res) => {
  const body = req.body;
  await Blog.findByIdAndDelete(body.blogId);

  return res.status(200).json({
    data: true,
    message: "Blog has been deleted successfully",
    status: true,
  });
};

const get = async (req, res) => {
  const blogs = await Blog.find();

  return res.status(200).json({
    data: blogs,
    message: "Blogs have been fetched",
    status: true,
  });
};

module.exports = {
  create,
  update,
  get,
  remove,
};
