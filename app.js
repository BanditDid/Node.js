const express = require('express');
const part = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(part.join(__dirname,"/docs/")))

app.get("/",(req,res) => {


res.send("Hell Word222");


})

app.listen(PORT,() => {
console.log("List on port",PORT);

})