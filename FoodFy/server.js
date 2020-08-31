const { response } = require("express");
const nunjucks = require('nunjucks');

const express = require('express');
const recipes = require("./recipes");

const server = express();



server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views",{
    express: server,
    autoescape: false,
    noCache:true
})

server.get("/",function(req,res){
    return res.render("home", { recipes })
});

server.get("/about",function(req,res){
    return res.render("about")
});

server.get("/recipes",function(req,res){
    return res.render("recipes", { recipes })
});


server.listen(5001, function(){
    console.log("🚀 Server is running")
});