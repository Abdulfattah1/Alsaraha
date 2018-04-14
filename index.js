const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();
const app = http.createServer(server);
const Router = express.Router();
const user = require('./routers/user')(Router);
const config = require('./config/database');

mongoose.connect(config.url,(err)=>{
    if(err)
    console.log('database is not working');
    else 
    console.log("database is working");
});



server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(__dirname+'/client/dist'));
server.use('/user',user);



server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/cleint/dist/index.html'));
});



server.listen('3000',(err)=>{
    if(err)
    console.log('the server is not working');
    else 
    console.log('the server is working');
});