const express=require('express');
const router=express.Router();

const {
    getAllCarrers,
    getIdCarrer,
    getListGroupsByCarrer,
    getListStudentsByCarrer,
    createCarrer,
    addStudentCarrer,
    addGroupCarrer
}=require('../controllers/carrera.js');

router.post('/carrers/', createCarrer);
router.get('/carrers/', getAllCarrers)
router.get('/carrers/:idCarrer', getIdCarrer);
router.get('/carrers/:idCarrer/groups', getListGroupsByCarrer);
router.get('/carrers/:idCarrer/students', getListStudentsByCarrer);

router.post('/carrers/:idCarrer/students', addStudentCarrer);
router.post('/carrers/:idCarrer/groups', addGroupCarrer);

module.exports=router;

