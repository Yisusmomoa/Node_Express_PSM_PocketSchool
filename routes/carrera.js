const express=require('express');
const router=express.Router();

const {
    getAllCarrers,
    getIdCarrer,
    getListGroupsByCarrer,
    getListStudentsByCarrer,
    createCarrer
}=require('../controllers/carrera.js');


router.get('/carrers/', getAllCarrers)
router.get('/carrers/:idCarrer', getIdCarrer);
router.get('/carrers/:idCarrer/groups', getListGroupsByCarrer);
router.get('/carrers/:idCarrer/students', getListStudentsByCarrer);
router.post('/carrers/', createCarrer);

module.exports=router;

