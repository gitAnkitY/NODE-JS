const http= require('http');

const myServer=http.createServer((req,res)=>{
    console.log("record is recived"); //we can take the user info by using like (req,req.herader) and many more..
    res.end("Hello from Server");
});

myServer.listen(8000,()=>{
    console.log("server started successfully")
});