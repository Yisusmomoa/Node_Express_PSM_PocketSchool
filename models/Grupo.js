const mongoose=require('mongoose');

const grupoSchema=new mongoose.Schema({
    nameGroup:String,
    listStudents:[
        {type:mongoose.Schema.Types.ObjectId, ref:'user'}
    ],
    teacher:{type:mongoose.Schema.Types.ObjectId, ref:'user'},
    listHomeworks:[
        {type:mongoose.Schema.Types.ObjectId, ref:'Tarea'}
    ],

}, {timestamps:true,
    versionKey:false})
const grupo=mongoose.model('Grupo', grupoSchema)

module.exports=grupo