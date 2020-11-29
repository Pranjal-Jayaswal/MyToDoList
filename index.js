const express=require('express');
const path = require('path');
const port =8000;

//importing  mongoose connection
const db=require('./config/mongoose');


const app=express();

//to convert form data for us in workable format
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



//middleware directing requests to routes folder
app.use('/', require('./routes'));


//middleware allowing access to static files like css files for home.ejs
app.use(express.static('myassets'));


//setting different fields for the created express app
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


//directing the app to the port(port is a kind of channel) through/on which it will work
app.listen(port,function(err){
    if(err){
        console.log(`error in running server: ${err}`);
    }
    return console.log(`server running on : ${port}`);
})