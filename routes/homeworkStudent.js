const express = require('express')
const router=express.Router();

const {
    getHomeworkStudentById,
    addHomeworkStudent,
    getHomeworks,
}=require('../controllers/homeworkStudent.js')

router.get('/homeworkStudent/', getHomeworks);
router.get('/homeworkStudent/:homeworkStudentId', getHomeworkStudentById)
router.post('/homeworkStudent/', addHomeworkStudent);

module.exports=router;

