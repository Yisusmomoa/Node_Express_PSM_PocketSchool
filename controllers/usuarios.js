const usuarios=require('../Usuarios.js');

const getUsers=(req, res)=>{
    res.json(usuarios)
}

const register=(req, res)=>{
    const newUser={
        id:usuarios.length+1,
        name:req.body.name,
        user:req.body.user,
        password:req.body.password,
        email:req.body.email,
        typeUser:req.body.typeUser,
        fechaRegistro:new Date()
    }
    if (!newUser.name || !newUser.user || !newUser.password || !newUser.email || !newUser.typeUser) {
        return res.status(400).json({msg: "content missing"})
    }
    usuarios.push(newUser);
    res.status(201).json(newUser);
}

module.exports={
    getUsers,
    register
}