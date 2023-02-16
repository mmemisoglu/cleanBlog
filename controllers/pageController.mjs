import Blog from "../models/Blogs.mjs";

export const getAddPage = (req, res) => {
  res.render("add_post");
};

export const getAboutPage = (req, res) => {
  res.render("about");
};

export const getPostEdit = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  res.render("edit", {
    blog,
  });
};

