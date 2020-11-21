const mongoose =require('mongoose');

const listSchema =new mongoose.Schema({
    description:{
        type: String,
        required:true,
    },
    type :{
        type:String,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true,
    }
})

const List =mongoose.model('List',listSchema);
module.exports=List;