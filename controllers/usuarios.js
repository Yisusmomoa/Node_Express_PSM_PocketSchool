const usuarios=require('../models/User.js');

const getUsers=(req, res)=>{
    usuarios.find()
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}))
}

const register=async (req, res)=>{
    const {email}=req.body
    console.log(email)
    let user=await usuarios.findOne({email})
    if (user) {
        return res.status(400).send("User already registered.")
    }
    usuarios.create(req.body)
    .then(result=>res.status(200).json({result}))
    .catch((err)=>res.status(500).json({msg:err}))
    
}

const login=(req, res)=>{
    usuarios.findOne({
        email:req.body.email,
        password:req.body.password
    })
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}))
}

const getUserById=(req, res)=>{
    usuarios.findOne({_id:req.params.userId})
    .then(result=>res.status(200).json(result))
    .catch((err)=>res.status(500).json({msg:err}))
}

const updateUser=async (req, res)=>{
    const {username, password, name, profilePhoto}=req.body;
    
    const idUser=req.params.userId;
    //const user=await usuarios.findOne({_id:idUser})

    usuarios.findOneAndUpdate({_id:{$eq:idUser}},{$set:{username:username, 
        password:password, name:name, profilePhoto:profilePhoto}}, {new: true} )
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const updatePic=(req, res)=>{
    const idUser=req.params.userId;
    const {profilePhoto}=req.body
    console.log(idUser)
    console.log(profilePhoto)
    usuarios.findOneAndUpdate({_id:{$eq:idUser}}, {$set:{profilePhoto:profilePhoto}}, {new: true})
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}))
}

module.exports={
    getUsers,
    register,
    login,
    getUserById,
    updateUser,
    updatePic
}