const homeworkStudents=require('../models/TareaAlunno.js')

const getHomeworks=(req, res)=>{
    homeworkStudents.find({})
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}));
}

const getHomeworkStudentById=(req, res)=>{
    const homeworkStudentId=req.params.homeworkStudentId;
    homeworkStudents.find({_id:homeworkStudentId})
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}));
}

const addHomeworkStudent=(req, res)=>{
    homeworkStudents.create(req.body)
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}));
}

const getHomeworkById=(req, res)=>{
    const idHomeworkStudent=req.params.idHomeworkStudent
    homeworkStudents.findOne({_id:idHomeworkStudent})
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}));
}

module.exports={
    getHomeworkStudentById,
    addHomeworkStudent,
    getHomeworks,
    getHomeworkById
}