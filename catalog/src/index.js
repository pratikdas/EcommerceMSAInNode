'use strict'

const PORT = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((_,res,next)=>{
    res.setHeader('cache-control', 'private, max-age=0, no-cache, no-store, must-revalidate');
    res.setHeader('expires','0');
    res.setHeader('pragma','no-cache');
    next();
});

app.get('/catalog',(req,res)=>{
    console.log("get called");
    res.send("Hello get");
});

app.post('/catalog',(req,res)=>{
    console.log("post called ",req.body);
    res.status(200).send(req.body)
    //res.send("Hello post ", req.body);
});



app.get("/", (req,res)=> {
    res.send("Hello");
});
app.listen(PORT, (request, response)=>{
    console.log("Listening on ${PORT}", PORT);
    
});