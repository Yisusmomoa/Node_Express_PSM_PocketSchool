const express=require('express');
const router=express.Router();
const {
    getHomeworks,
    getHomeworkById,
    updateHomework,
    addPdfHomework,
    addHomeworkStudent

}=require('../controllers/homework.js')

router.get('/homework/', getHomeworks);
router.get('/homework/:homeworkId', getHomeworkById);
router.put('/homework/:homeworkId', updateHomework);
router.post('/homework/:homeworkId', addPdfHomework);
router.post('/homework/:homeworkId/students', addHomeworkStudent)
module.exports=router;
