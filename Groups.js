const listaUsuarios=require('./Usuarios.js');
const listaTareas=require('./Homework.js');
const crypto=require('crypto')
const Groups=[
    {
        id:crypto.randomUUID(),
        nameGroup:"Grupo 01",
        listStudents:listaUsuarios,
        Teacher:listaUsuarios.find(element=>element.typeUser==="Teacher"),
        listHomeworks:listaTareas,
        date:new Date()
    },
    {
        id:crypto.randomUUID(),
        nameGroup:"Grupo 02",
        listStudents:listaUsuarios,
        Teacher:listaUsuarios.find(element=>element.typeUser==="Teacher"),
        listHomeworks:listaTareas,
        date:new Date()
    },
    {
        id:crypto.randomUUID(),
        nameGroup:"Grupo 03",
        listStudents:listaUsuarios,
        Teacher:listaUsuarios.find(element=>element.typeUser==="Teacher"),
        listHomeworks:listaTareas,
        date:new Date()
    },
    {
        id:crypto.randomUUID(),
        nameGroup:"Grupo 04",
        listStudents:listaUsuarios,
        Teacher:listaUsuarios.find(element=>element.typeUser==="Teacher"),
        listHomeworks:listaTareas,
        date:new Date()
    }
]
// console.log("Grupos:", Groups)
module.exports=Groups;