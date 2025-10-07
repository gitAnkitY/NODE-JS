const http=require("http");
const fs=require("fs");

const Server=http.createServer((req,res)=>{
    const log=`${Date.now()}: ${req.url} Request Recived\n`
    fs.appendFile("ankit1.txt",log,(err,data)=>{
        switch(req.url){
            case '/about':
                res.end("you are at our about page");
                break;
            case '/home':
                res.end("you are at our home page");
                break;
            case '/':
                res.end("error 404 page not found ")

        };
    });
});


Server.listen(8007,()=>{
    console.log("server is started !!");
})