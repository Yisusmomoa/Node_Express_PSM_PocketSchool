
const usuarios=require('../models/User.js');

const getUsers=(req, res)=>{
    usuarios.find({})
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const register=(req, res)=>{
    usuarios.create(req.body)
    .then(result=>res.status(200).json({result}))
    .catch((err)=>res.status(500).json({msg:err}))
    
}

const login=(req, res)=>{
    usuarios.findOne({
        email:req.body.email,
        password:req.body.password
    })
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const getUserById=(req, res)=>{
    usuarios.findOne({_id:req.params.userId})
    .then(result=>res.status(200).json({result}))
    .catch((err)=>res.status(500).json({msg:err}))
}

const updateUser=(req, res)=>{
    const {username, password}=req.body;
    const idUser=req.params.userId;
    console.log(idUser)
    cusuarios.updateOne({_id:{$eq:idUser}},{$set:{username:username, password:password}} )
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

module.exports={
    getUsers,
    register,
    login,
    getUserById,
    updateUser
}