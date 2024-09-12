const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 300,
  },
  content: {
    type: String,
    required: true,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
