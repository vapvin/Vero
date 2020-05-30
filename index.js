const express = require('express');
const app = express();

const PORT = 4000

function handleListen(){
    console.log(`Listening On Port: http://localhost:${PORT}`);
}
function homeRes(req, res){
    console.log(req);
    res.send(`<h1>Hello, World</h1>`);
}
function meRes(req, res){
    res.send("My Site");
}
app.get("/", homeRes);
app.get("/me", meRes);
app.listen(PORT, handleListen);