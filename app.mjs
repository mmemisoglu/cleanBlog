import express from "express";
import nodemon from "nodemon";
import path from "path";
import ejs from "ejs";

const app = express();

//Template Engine
app.set("view engine", "ejs");

//Middleware
const __dirname = path.resolve;
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  res.render("index");
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

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
