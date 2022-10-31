const Homeworks=require('../models/Tarea.js');

// const crypto=require('crypto');

const getHomeworks=(req, res)=>{
    Homeworks.find({})
    .then(result=>res.status(200).json({result}))
    .catch(err=>err.status(500).json({msg:err}))
}

const getHomeworkById=(req, res)=>{
    const idHomework=req.params.homeworkId;
    Homeworks.find({_id:idHomework})
    .then(result=>res.status(200).json({result}))
    .catch(err=>err.status(500).json({msg:err}))
}

const updateHomework=(req, res)=>{
    const idHomework=req.params.homeworkId;
    const {title, description, dateFin}=req.body
    Homeworks.updateOne({_id:{$eq:idHomework}},{$set:{title:title, description:description, dateFin:dateFin}} )
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const addPdfHomework=(req, res)=>{

}

const addHomeworkStudent=(req, res)=>{
    const idHomeworkStudent=req.body.idHomeworkStudent;
    const idHomework=req.params.homeworkId;
    Homeworks.findOneAndUpdate(
        {_id:idHomework},
        {$push:{
            "tareasAlumnos":idHomeworkStudent
        }}
    )
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}));
}

const createHomework=(req, res)=>{
    Homeworks.create(req.body)
    .then(result=>res.status(200).json({result}))
    .catch(err=>err.status(500).json({msg:err}))
}

module.exports={
    getHomeworks,
    getHomeworkById,
    updateHomework,
    addPdfHomework,
    addHomeworkStudent,
    createHomework
}