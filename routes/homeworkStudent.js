const express = require('express')
const router=express.Router();

const {
    getHomeworkStudentById
}=require('../controllers/homeworkStudent.js')

router.get('/homeworkStudent/:homeworkStudentId', getHomeworkStudentById)

module.exports=router;
