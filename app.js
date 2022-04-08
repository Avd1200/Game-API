const express = require('express');
const Result = require('./Result');
const app = express();

app.get('/game/start',(req,res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'});
    var myobj  = Result(1,3);
    res.end(JSON.stringify(myobj));
});

const port  = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Server is up and running`)});
