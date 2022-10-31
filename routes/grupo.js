const express=require('express');
const router=express.Router();

const {
    getGroups,
    getGroupById,
    getStudentsByIdGroup,
    getTeacherByIdGroup,
    getHomeworksByIdGroup,
    postCreateGroup,
    putUpdateGroup,
    deleteGroup,
    addStudentsGroup,
    addHomeworkGroup,
    deleteStudentGroup,

}=require('../controllers/grupo.js');

router.get('/groups/', getGroups);
router.get('/groups/:groupId', getGroupById) 
router.get('/groups/:groupId/Students', getStudentsByIdGroup);
router.get('/groups/:groupId/Teacher', getTeacherByIdGroup);
router.get('/groups/:groupId/Homeworks', getHomeworksByIdGroup);

router.post('/groups/', postCreateGroup);
router.put('/groups/:groupId', putUpdateGroup);
router.delete('/groups/:groupId', deleteGroup);
router.post('/groups/:groupId/Students', addStudentsGroup)
router.post('/groups/:groupId/Homeworks', addHomeworkGroup)
router.delete('/groups/:groupId/Students', deleteStudentGroup);

module.exports=router;
