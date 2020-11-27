const mongoose =require('mongoose');

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

const Listt =mongoose.model('List',listSchema);
module.exports=Listt;