import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import ejs from "ejs";

import * as postController from "./controllers/postController.mjs";
import * as pageController from "./controllers/pageController.mjs";

//Start Express
const app = express();
//Connect to Database
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
app.use(methodOverride('_method',{
  methods:['POST','GET']
}));

//Routes

//Post Controller
app.get("/", postController.getAllPost);
app.get("/blog/:id", postController.getPost);
app.post("/blog/create", postController.createPost);
app.put('/blog/edit/:id',postController.editPost);
app.delete('/blog/delete/:id', postController.deletePost)
//Page Controller
app.get("/add_blog_page", pageController.getAddPage);
app.get("/about_page", pageController.getAboutPage);
app.get("/blog_edit_page/:id",pageController.getPostEdit);


//Server listen
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
