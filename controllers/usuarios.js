
const usuarios=require('../models/User.js');

const getUsers=(req, res)=>{
    usuarios.find({})
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const register=async (req, res)=>{
    const {email}=req.body
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
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const getUserById=(req, res)=>{
    usuarios.findOne({_id:req.params.userId})
    .then(result=>res.status(200).json({result}))
    .catch((err)=>res.status(500).json({msg:err}))
}

const updateUser=(req, res)=>{
    const {username, password, name}=req.body;
    
    const idUser=req.params.userId;
    //const user=await usuarios.findOne({_id:idUser})

    usuarios.findOneAndUpdate({_id:{$eq:idUser}},{$set:{username:username, 
        password:password, name:name}}, {new: true} )
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}
//upload.single('my-file')
const multer=require('multer');

// const storage=multer.diskStorage({
//     destination:function(req, file, cb){
//         cb(null,'uploads/fotos/')
//     },
//     filename:function (req, file, cb) {
//         console.log(file)
//         cb(null, file.fieldname+'-'+Date.now()+".jpg")
//     }
// })
const Storage=multer.diskStorage({
    destination:"uploads",
    filename:function (req, file, cb) {
        console.log(file)
        cb(null, file.fieldname+'-'+Date.now()+".jpg")
    }
})
let upload=multer({storage:Storage}).single('image')

//const uploadPic=upload.single('myFile')

const updateUserPic=( req, res)=>{
    
    const idUser=req.params.userId;
    upload(req, res)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>console.log(err))
    console.log(idUser)
    
}

module.exports={
    getUsers,
    register,
    login,
    getUserById,
    updateUser,
    updateUserPic,
    
}