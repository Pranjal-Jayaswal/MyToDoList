const express=require('express');
const app=express();
const port =8000;

const db=require('./config/mongoose');
const List=require ('./models/listSchema');

//middleware directing requests to routes folder
app.use('/', require('./routes'));
//middleware allowing access to static files like css files for home.ejs
app.use(express.static('myassets'));
var bodyParser = require('body-parser');
// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
//setting different fields for the created express app
app.set('view engine','ejs');
app.set('views','./views');


//directing the app to the port(port is a kind of channel) through/on which it will work
app.listen(port,function(err){
    if(err){
        console.log(`error in running server: ${err}`);
    }
    return console.log(`server running on : ${port}`);
})