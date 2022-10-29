const mongoose=require('mongoose');

const tareaSchema=new mongoose.Schema({
    title:String,
    description:String,
    pdfsTarea:[],
    dateIni:Date,
    dateFin:Date,
    tareasAlumnos:[
        {type:mongoose.Schema.Types.ObjectId, ref:'TareaAlumno'}
    ],
    grupo:{type:mongoose.Schema.Types.ObjectId, ref:'Grupo'}
}, 
{timestamps:true,
    versionKey:false})
const tarea=mongoose.model('Tarea', tareaSchema)

module.exports=tarea