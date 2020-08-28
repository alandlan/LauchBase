const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const habilidades = require("./data")

server.use(express.static('public'));

server.set("view engine","njk");

nunjucks.configure("views",{
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req,res){

    const about = {
        avartar_url: "https://avatars1.githubusercontent.com/u/20859616?s=460&v=4",
        avartar_name: "Alan Martins",
        nome: "Alan Vieira Martins",
        job: "Engenheiro de Software",
        description: "Desenvolvedor FullStack (.NET / ReactJS / NodeJS)",
        links: [
            {name: "GitHub", url: "https://github.com/alandlan"},
            {name: "LinkedIn", url: "https://www.linkedin.com/in/alan-martins-38b35799/"}
        ]

    }

    return res.render("about", {about: about});
});

server.get("/habilidades", function(req,res){

    const about = {
        avartar_url: "https://avatars1.githubusercontent.com/u/20859616?s=460&v=4",
        avartar_name: "Alan Martins",
        nome: "Alan Vieira Martins",
        job: "Engenheiro de Software",
        description: "Desenvolvedor FullStack (.NET / ReactJS / NodeJS)",
        links: [
            {name: "GitHub", url: "https://github.com/alandlan"},
            {name: "LinkedIn", url: "https://www.linkedin.com/in/alan-martins-38b35799/"}
        ]

    }

    return res.render("habilidades",{items: habilidades, about});
});

server.listen(5000, function(){
    console.log("🚀 Server is running")
});