const express = require('express');
const part = require("path");

const app = express();
const port = 3000;

app.use(express.static(part.join(__dirname,"/public/")))

app.get("/",(req,res) => {


res.send("Hell Word222");


})

app.listen(port,() => {
console.log("List on port",port);


})