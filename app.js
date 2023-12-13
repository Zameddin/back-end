const fs = require('fs');


const userData = fs.readFileSync('./data.json');





const users = JSON.parse(userData);
const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.json(users)
})
app.listen(3000, ()=>{
    console.log("server calisdi");
})





