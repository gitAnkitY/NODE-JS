const http=require("http");
const fs=require("fs");

const lovelyServer =http.createServer((req,res)=>{
    const log=(`${Date.now()}: new request recived\n`);
    fs.appendFile("myserver.txt",log,(err,data)=>{
        if(err){
            console.log(err);
            res.end("something went wrong dosto!!")
        }else{
        res.end("well hello dosto welcome to my lovely server !!");
        }
    });
});

lovelyServer.listen(8000,()=>{
    console.log("server is live dosto!!");
})