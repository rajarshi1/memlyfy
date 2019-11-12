const express = require('express');
const app = express();
const PORT = 9090

app.get('/', function(req,res){
    res.sendFile(__dirname + '/views/index.html')
})


app.listen(PORT, function(){
    console.log('app on 9090');
})