const express = require('express');
const part = require("path");

const app = express();
const PORT = process.env.PORT;

app.use(express.static(part.join(__dirname,"/docs/")))

app.get("/",(req,res) => {


res.send("Hell Word222");


})

app.listen(PORT,() => {
console.log("List on port",PORT);
debug("List on port:" + PORT);

})