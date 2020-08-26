const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const habilidades = require("./data")

server.use(express.static('public'));

server.set("view engine","njk");

nunjucks.configure("views",{
    express:server 
})

server.get("/", function(req,res){
    return res.render("about");
});

server.get("/habilidades", function(req,res){

    return res.render("habilidades",{items: habilidades});
});

server.listen(5000, function(){
    console.log("🚀 Server is running")
});