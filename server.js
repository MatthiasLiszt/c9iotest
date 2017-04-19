var express=require('express')
var app=express()

var port=8080

app.get('/home',function(req,res){
  res.end("Hello World!");
});

app.listen(port)
