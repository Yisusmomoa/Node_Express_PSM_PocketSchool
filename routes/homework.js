const express=require('express');
const router=express.Router();
const {
    getHomeworks,
    getHomeworkById,
    updateHomework,
    addHomeworkStudent,
    createHomework,
    getHomeworksByUser,
    getHomeworksByTeacher,
    updateStatusHomework
}=require('../controllers/homework.js')

router.post('/homework/', createHomework)
router.get('/homework/', getHomeworks);
router.get('/homework/:homeworkId', getHomeworkById);
router.get('/homework/listStudents/:idUser', getHomeworksByUser)
router.get('/homework/listHomeworksTeacher/:idUser', getHomeworksByTeacher)
router.put('/homework/:homeworkId', updateHomework);
router.put('/homework/status/:homeworkId', updateStatusHomework)
router.post('/homework/:homeworkId/students', addHomeworkStudent)
module.exports=router;
