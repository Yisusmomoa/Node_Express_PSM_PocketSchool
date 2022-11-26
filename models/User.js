const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    username:String,
    profilePhoto: { 
        type:String,
        default: 
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg", 
        },
    typeUser:String,
    carrer:String,
},{timestamps:true,
    versionKey:false})
const user=mongoose.model('User', userSchema)

module.exports=user;

/*
{
  "result": {
    "name": "Usuario 6",
    "email": "user6@gmail.com",
    "password": "123456",
    "username": "User6 ",
    "profilePhoto": "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    "typeUser": "Teacher",
    "_id": "637485bf0c85baafe1272a03",
    "createdAt": "2022-11-16T06:39:59.630Z",
    "updatedAt": "2022-11-16T06:39:59.630Z"
  }
}

*/