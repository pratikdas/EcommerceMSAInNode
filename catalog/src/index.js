'use strict'

const PORT = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./catalogController");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((_,res,next)=>{
    res.setHeader('cache-control', 'private, max-age=0, no-cache, no-store, must-revalidate');
    res.setHeader('expires','0');
    res.setHeader('pragma','no-cache');
    next();
});

routes(app);

app.listen(PORT, (request, response)=>{
    console.log(`Listening on ${PORT}`, PORT);
    
});