const mongoose=require('mongoose');

 const carreraSchema=new mongoose.Schema({
    name:String,
    listStudents:[
        {type:mongoose.Schema.Types.ObjectId, ref:'User'}
    ],
    listGroups:[
        {type:mongoose.Schema.Types.ObjectId, ref:'Grupo'}
    ]
 }, {timestamps:true,
    versionKey:false})

 const carrera=mongoose.model("Carrera", carreraSchema);

 module.exports=carrera;
 