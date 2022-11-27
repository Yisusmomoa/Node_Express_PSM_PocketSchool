const express=require('express');
const router=express.Router();


// const multer=require('multer');

// const storage=multer.diskStorage({
//     destination:function(req, file, cb){
//         cb(null,'uploads')
//     },
//     filename:function (req, file, cb) {
//         console.log(file)
//         cb(null, file.fieldname+'-'+Date.now())
//     }
// })
// var upload=multer({storage:storage})

const {
    getUsers,
    register,
    login,
    getUserById,
    updateUser,
    updateUserPic
}=require('../controllers/usuarios.js');

router.get('/users/', getUsers)
router.post('/users/register', register);
router.post('/users/login', login);
router.get('/users/:userId', getUserById);
router.put('/users/profilePic/:userId', updateUserPic);
router.put('/users/:userId', updateUser);

module.exports=router;