const groups=require('../models/Grupo.js');
const carrers=require('../models/Carrera');

const getGroups=(req, res)=>{
    groups.find({})
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(400).json({msg:err}))
}

const getGroupById=(req, res)=>{
    const id=req.params.groupId;
    
    groups.findById(id)
    .then(result=>res.status(200).json(result))
    .catch(err=>err.status(500).json({msg:err}))
}
const getGroupsByUser= async(req, res)=>{
    const idUser=req.params.idUser;
    console.log(idUser)

        
    let grupos=await groups.find({teacher:idUser})
    console.log(grupos)
    console.log(grupos.length)
    if(grupos.length>0){
        res.status(200).json(grupos)
    }
    else{
        console.log("student")
        groups.find({listStudents:idUser})
        .then(result=>res.status(200).json(result))
        .catch(err=>err.status(500).json({msg:err}))
    }

}

const getStudentsByIdGroup=(req, res)=>{
    const id=req.params.groupId;
    groups.findById(id).select("listStudents")
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const getTeacherByIdGroup=(req, res)=>{
    const id=req.params.groupId;
    groups.findById(id).select("teacher")
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const getHomeworksByIdGroup=(req, res)=>{
    const id=req.params.groupId;
    groups.findById(id).select("listHomeworks")
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const postCreateGroup=(req, res)=>{
    console.log("Hi")
    console.log(req.body)
    groups.create(req.body)
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}))
    
}

const putUpdateGroup=(req, res)=>{
    const groupId=req.params.groupId;
    const nameGroup=req.body.nameGroup;
    groups.updateOne({_id:{$eq:groupId}},{$set:{nameGroup:nameGroup}} )
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const deleteGroup=(req, res)=>{
    const groupId=req.params.groupId;
    groups.deleteOne({_id:groupId})
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}))
}

const addStudentsGroup=(req, res)=>{
    const groupId=req.params.groupId;
    const idStudent=req.body.idStudent;
    console.log(groupId)
    console.log(idStudent)
    groups.findOneAndUpdate(
        {_id:groupId},
        {$push:{
            "listStudents":idStudent
        }}
    )
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}));
}

const addHomeworkGroup=(req, res)=>{
    const groupId=req.params.groupId;
    const idHomework=req.body.idHomework;
    
    groups.findOneAndUpdate(
        {_id:groupId},
        {
                $push:{
                "listHomeworks":idHomework
            }
        }
    )
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}));
}
const deleteStudentGroup=(req, res)=>{
    const groupId=req.params.groupId;
    const idStudent=req.body.idStudent;
    groups.findOneAndUpdate(
        {_id:groupId},
        {
            $pull:{
                "listStudents":idStudent
            }
        }
    )
    .then(result=>res.status(200).json({result}))
    .catch(err=>res.status(500).json({msg:err}));
}

module.exports={
    getGroups,
    getGroupById,
    getGroupsByUser,
    getStudentsByIdGroup,
    getTeacherByIdGroup,
    getHomeworksByIdGroup,
    postCreateGroup,
    putUpdateGroup,
    deleteGroup,
    addStudentsGroup,
    addHomeworkGroup,
    deleteStudentGroup
}