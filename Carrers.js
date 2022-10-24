const listUsuarios=require('./Usuarios.js');
const listaGrupos=require('./Groups.js');
const crypto=require('crypto')
const Carrers=[
    {
        id:crypto.randomUUID(),
        name:"LMAD",
        listGroups:listaGrupos,
        listUsers:listUsuarios
    },
    {
        id:crypto.randomUUID(),
        name:"LCC",
        listGroups:listaGrupos,
        listUsers:listUsuarios
    },
    {
        id:crypto.randomUUID(),
        name:"LF",
        listGroups:listaGrupos,
        listUsers:listUsuarios
    },
]

module.exports=Carrers;