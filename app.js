require("dotenv").config();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");
const https = require("https");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

/* Routes */

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/aware", (req, res)=>{
    res.render("aware");
});

app.get("/alerts", (req, res)=>{
    res.render("alerts");
});

app.get("/prepared", (req, res)=>{
    res.render("prepared");
});

app.get("/map", (req, res)=>{
    res.render("map");
});

app.get("/informed", (req, res)=>{
    res.render("informed");
});

app.get("/search", (req, res)=>{
    res.render("search");
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Express server running on localhost:3000");
});