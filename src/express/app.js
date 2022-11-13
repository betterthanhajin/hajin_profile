const express =  require('express');
const app = express();
const port = 7300;
var http = require('http').Server(app);
var fs = require('fs')

const router = require("./main")(app);

app.get('/', (req,res) =>{
    res.send("hello world");
    fs.readFile('../../src/index.html' , function(error, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
    // res.sendFile("../index.html");
});

app.listen(port,()=>{
    console.log("서버가 실행됩니다 port4300")
});
