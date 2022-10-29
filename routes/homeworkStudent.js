const express = require('express')
const router=express.Router();

const {
    getHomeworkStudentById,
    addHomeworkStudent
}=require('../controllers/homeworkStudent.js')

router.get('/homeworkStudent/:homeworkStudentId', getHomeworkStudentById)
router.post('/homeworkStudent', addHomeworkStudent);

module.exports=router;
