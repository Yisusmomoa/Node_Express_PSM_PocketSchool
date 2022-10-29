
const usuarios=require('../models/User.js');

const getUsers=(req, res)=>{
    // res.json(usuarios)
    usuarios.find({})
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const register=(req, res)=>{
    usuarios.create(req.body)
    .then(result=>res.status(200).json({result}))
    .catch((err)=>res.status(500).json({msg:err}))
    
    // const newUser={
    //     id:crypto.randomUUID(),
    //     name:req.body.name,
    //     user:req.body.user,
    //     password:req.body.password,
    //     email:req.body.email,
    //     typeUser:req.body.typeUser,
    //     fechaRegistro:new Date()
    // }
    // if (!newUser.name || !newUser.user || !newUser.password || !newUser.email || !newUser.typeUser) {
    //     return res.status(400).json({msg: "content missing"})
    // }
    // usuarios.push(newUser);
    // res.status(201).json(newUser);
}

const login=(req, res)=>{
    // const user={
    //     email:req.body.email,
    //     password:req.body.password
    // }
    // if (!user.email || !user.password) {
    //     return res.status(400).json({msg: "content missing"})
    // }
    // const usuario=usuarios.find(element=>element.email===user.email && element.password===user.password)
    // usuario?res.json(usuario):res.status(404).json({msg:"user doesn't exists"})
    usuarios.findOne({
        email:req.body.email,
        password:req.body.password
    })
    
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const getUserById=(req, res)=>{
    // const idUser=req.params.userId;
    // const user=usuarios.find(user=>user.id===idUser);
    // if (!user) {
    //     return res.status(404).json({msg:"User not found"})
    // }
    // res.json(user)
    usuarios.findOne({_id:req.params.userId})
    .then(result=>res.status(200).json({result}))
    .catch((err)=>res.status(500).json({msg:err}))
}

const updateUser=(req, res)=>{
    // const id=req.params.userId;
    // const index=usuarios.findIndex(element=>element.id===id);
    // if (index===-1) {
    //     return res.status(404).json({msg:"User not found"})
    // }
    // const userUpdate={
    //     id:usuarios[index].id,
    //     name:usuarios[index].name,
    //     user:req.body.user || usuarios[index].user,
    //     password:req.body.password || usuarios[index].password,
    //     email:usuarios[index].email,
    //     fechaRegistro:usuarios[index].fechaRegistro,
    //     typeUser:usuarios[index].typeUser
    // }
    // usuarios[index]=userUpdate;
    // res.status(200).json({msg:"User updated"})
}

module.exports={
    getUsers,
    register,
    login,
    getUserById,
    updateUser
}