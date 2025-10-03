const fs= require('fs');

// making file and writing  :  

// // SYNC.....
// fs.writeFileSync('./file_Handling/test.txt','hey there');

// // ASYNC.....
// fs.writeFile('./file_Handling/test.txt','hey there',(err)=>{})


// reading file : 

// //SYNC.....
// const result=fs.readFileSync('./file_Handling/contact.txt', 'utf-8');
// console.log(result);

//ASYNC....
// fs.readFile('./file_Handling/contact.txt', 'utf-8',(err,result)=>{
//     if(err){
//         console.log("error occured", err);
//     }
//     else{
//         console.log(result);
//     }
// });


// And many more like append, copy , cut, unlink .......


