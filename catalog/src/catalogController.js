"use strict"

const routes = function(app){

app.get('/catalog/:id',(req,res)=>{
    console.log("get catalog called");
    const catID = req.params.id;
    const catalog = {
        id: catID,
        name: "Electronics"
    };
    res.send("Hello get");
});

app.post('/catalog',(req,res)=>{
    console.log("post called ",req.body);

    const catalog = {
        id: "C1",
        name: "Electronics"
    };
    res.status(200).send(catalog)
    //res.send("Hello post ", req.body);
});



app.get("/", (req,res)=> {
    res.send("Hello");
});
};
module.exports = routes;