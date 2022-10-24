const express=require('express');
const router=express.Router();

const {
    getAllCarrers,
    getIdCarrer,
    getListGroupsByCarrer,
    getListStudentsByCarrer
}=require('../controllers/carrera.js');


router.get('/carrers/', getAllCarrers)
router.get('/carrers/:idCarrer', getIdCarrer);
router.get('/carrers/:idCarrer/groups', getListGroupsByCarrer);
router.get('/carrers/:idCarrer/students', getListStudentsByCarrer);

module.exports=router;

