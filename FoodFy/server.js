const { response } = require("express");

const express = require('express');
const nunjunks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.get("/",function(req,res){
    return res.send("Ola");
});

server.listen(5001, function(){
    console.log("🚀 Server is running")
});