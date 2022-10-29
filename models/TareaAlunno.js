const mongoose=require('mongoose');

//el schema es la estructura del modelo de la bd

const tareaAlumnoSchema=new mongoose.Schema({
    dateDelivery:Date,
    pdfs:[],
    student:{type:mongoose.Schema.Types.ObjectId, ref:'user'},
    status:{
        type:Boolean,
        default:false
    }
}, 
{timestamps:true,
versionKey:false}
)//crea una fecha de creación y actualización en automatico

const tareaAlumno=mongoose.model('TareaAlumno', tareaAlumnoSchema)

module.exports=tareaAlumno