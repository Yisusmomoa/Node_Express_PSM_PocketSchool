const express=require('express');
const router=express.Router();
const {
    getHomeworks
}=require('../controllers/homework.js')

router.get('/homework/', getHomeworks);

module.exports=router;