//imposting mongoose package
const mongoose= require ('mongoose');

//connecting mongoose to db
mongoose.connect('mongodb://localhost/myTo_do');

//for verification storing the connection and checking it further
const db=mongoose.connection;

db.on('error',console.error.bind(console,'errorrrr in connecting to db'));

db.once('open',function(){
console.log('successssful in connecting bd');
});

