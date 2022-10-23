const express=require('express');
const router=express.Router();

const {
    getUsers,
    register,
    login,
    getUserById,
    updateUser,

}=require('../controllers/usuarios.js');

router.get('/users/', getUsers)
router.post('/users/register', register);

module.exports=router;