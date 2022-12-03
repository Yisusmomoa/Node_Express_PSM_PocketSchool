const express=require('express');
const router=express.Router();

const {
    getUsers,
    register,
    login,
    getUserById,
    updateUser,
    updatePic

}=require('../controllers/usuarios.js');

router.get('/users/', getUsers)
router.post('/users/register', register);
router.post('/users/login', login);
router.get('/users/:userId', getUserById);
// router.put('/users/profilePic/:userId', updatePic)
router.put('/users/:userId', updateUser)
module.exports=router;