const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs')

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/friends/:name',function(req,res){
    res.render('index',{
        name:req.params.name
    })
})
app.get('/profile/friends/:name',function(req,res){
    res.render('index2',{
        name:req.params.name
    })
})
app.listen(3000,function(){
    console.log("http://localhost:3000/");
})