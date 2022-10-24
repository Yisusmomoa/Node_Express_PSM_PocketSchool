const crypto=require('crypto')
const Usuarios=[
    {
        id:crypto.randomUUID(), name:"Brandon loera", 
        user:"Brandon", "password":"12345", 
        email:"bjs29qhotmail.comm", fechaRegistro: new Date(),
        typeUser:"Teacher"
    },
    {
        id:crypto.randomUUID(), name:"Usuario uno", 
        user:"user1", "password":"12345", 
        email:"user1@gmail.com", fechaRegistro: new Date(),
        typeUser:"Teacher"
    },
    {
        id:crypto.randomUUID(), name:"Usuario dos", 
        user:"user2", "password":"12345", 
        email:"user2@gmail.com", fechaRegistro: new Date(),
        typeUser:"Student"
    },
    {
        id:crypto.randomUUID(), name:"Usuario tres", 
        user:"user3", "password":"12345", 
        email:"user3@gmail.com", fechaRegistro: new Date(),
        typeUser:"Student"
    },
    {
        id:crypto.randomUUID(), name:"Usuario cuatro", 
        user:"user4", "password":"12345", 
        email:"user4@gmail.com", fechaRegistro: new Date(),
        typeUser:"Teacher"
    }
]

module.exports=Usuarios;
