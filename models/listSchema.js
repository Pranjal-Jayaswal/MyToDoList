//old instace only of mongoose imported
const mongoose =require('mongoose');

//schema created which specifies how data will be stored like in what format
const listSchema =new mongoose.Schema({
    description:{
        type: String,
        required:true,
    },
    category :{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
})

//making the schema created available for importing in other files
const Listt =mongoose.model('List',listSchema);
module.exports=Listt;