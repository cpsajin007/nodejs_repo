const express = require('express');

const app=express();   //express initialization
 //portnumber

app.get('/',function(req,res){
    res.send("welcome my page");
})
app.get('/sajin',function(req,res){
    const id =req.query.id

    res.send("welcome back sajincp"+id);
})

app.get('/sajin/:id',function(req,res){
    const id=req.params.id
    res.send("Hi hello" +id)
})
app.listen(9000,function(req,resp){
    console.log("its running");
});        
