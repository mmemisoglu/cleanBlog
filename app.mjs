import express from "express";
import mongoose from 'mongoose';
import ejs from "ejs";
import Blog from "./models/Blogs.mjs";

const app = express();

mongoose.set("strictQuery", false); //Required for 'mongoose.connect()'
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template Engine
app.set("view engine", "ejs");

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get("/", async (req, res) => {
  const blogs = await Blog.find({})
  res.render("index",{
    blogs
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/post", (req, res) => {
  res.render("post");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.post('/blogs', async (req,res) =>{
  await Blog.create(req.body)
  res.redirect('/');
})


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
