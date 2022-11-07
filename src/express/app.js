const express =  require('express');
const app = express();
const port = 3300;
const router = require("./main")(app);

app.get('/',(req,res) =>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log("서버가 실행됩니다 port3300")
});