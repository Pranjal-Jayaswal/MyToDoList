const express=require('express');
const app=express();
const port =8000;

app.listen(port,function(err){
    if(err){
     //   console.log('error',err);
        console.log(`error in running server: ${err}`);
    }
    return console.log(`server running on : ${port}`);
})