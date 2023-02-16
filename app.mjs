import express from "express";
import mongoose from "mongoose";
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

//Routes

//Post Controller
app.get("/", postController.getAllPost);
app.get("/post/:id", postController.getPost);
app.post("/blogs", postController.createPost);

//Page Controller
app.get("/add_post", pageController.getAddPage);
app.get("/about", pageController.getAboutPage);
app.get("/post/edit/:id",pageController.getPostEdit);


//Server listen
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
