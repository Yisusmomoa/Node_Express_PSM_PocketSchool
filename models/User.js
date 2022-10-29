const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    username:String,
    profilePhoto:String,
    typeUser:String
},{timestamps:true,
    versionKey:false})
const user=mongoose.model('User', userSchema)

module.exports=user;