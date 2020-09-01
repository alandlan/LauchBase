const express = require('express');
const routes = express.Router()

routes.get('/',function(req,res){
    return res.redirect('/languages');
})

routes.get('/languages',function(req,res){
    return res.render('languages/index');
})

routes.get('/skills',function(req,res){
    return res.send('skills');
})

module.exports = routes;
