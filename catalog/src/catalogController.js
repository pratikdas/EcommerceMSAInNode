"use strict"
const catalog = require("./catalog");

const routes = function(app){
var catalogs = [];
app.get('/catalog/:id',(req,res)=>{
    console.log("get catalog called");
    const catID = req.params.id;
    const catalog = catalog(catID, "Electronics");
    res.send(catalog);
});

app.post('/catalog',(req,res)=>{
    console.log("post called ",req.body);
    
    const catalog = catalog(catID, "Electronics");
    
    catalogs.push(catalog);
    res.status(200).send(catalog)
    
});


};
module.exports = routes;