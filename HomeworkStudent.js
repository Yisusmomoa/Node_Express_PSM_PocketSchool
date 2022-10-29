const crypto=require('crypto')
const listaUsuarios=require('./Usuarios.js');
const homeworkStudents=[
    {
        id:crypto.randomUUID(),
        dateDelivery:new Date(),
        pdfs:[],
        Teacher:listaUsuarios.find(element=>element.typeUser==="Teacher"),
        student:listaUsuarios.find(element=>element.typeUser==="Student"),
        status:true
    }
]

module.exports=homeworkStudents;