import Blog from "../models/Blogs.mjs";

export const getAllPost = async (req, res) => {
  const blogs = await Blog.find({}).sort('-dateCreated');
  res.render("index", {
    blogs,
  });
};

export const getPost = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("post", {
    blog,
  });
};

export const createPost = async (req, res) => {
  await Blog.create(req.body);
  res.redirect("/");
};

export const editPost = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });
    blog.title = req.body.title;
    blog.detail = req.body.detail;
    await blog.save();
    res.redirect(`/blog/${req.params.id}`);
};
