const http= require('http');
const fs= require("fs");
const { log } = require('console');

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}: New Request Received\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("Hello from Server");
    });
});

myServer.listen(8002,()=>{
    console.log("server started successfully")
});