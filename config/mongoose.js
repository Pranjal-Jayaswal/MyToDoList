const mongoose= require ('mongoose');

mongoose.connect('mongodb://localhost/to_do');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'errorrrr in connecting to db'));

db.once('open',function(){
console.log('successssful in connecting bd');
});