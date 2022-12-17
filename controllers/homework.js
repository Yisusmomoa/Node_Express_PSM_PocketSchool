const Homeworks=require('../models/Tarea.js');
const groups=require('../models/Grupo.js');
// const crypto=require('crypto');

const getHomeworks=(req, res)=>{
    Homeworks.find({})
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}))
}

const getHomeworkById=(req, res)=>{
    const idHomework=req.params.homeworkId;
    Homeworks.find({_id:idHomework})
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}))
}

const updateHomework=(req, res)=>{
    const idHomework=req.params.homeworkId;
    const {title, description, dateFin}=req.body
    Homeworks.updateOne({_id:{$eq:idHomework}},{$set:{title:title, description:description, dateFin:dateFin}} )
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}))
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
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}));
}

const createHomework=async (req, res)=>{
    try {
        const newHomwork=await Homeworks.create(req.body);
        
        const idHomework=newHomwork._id;
        const idGrupo=req.body.grupo;
        groups.findOneAndUpdate(
            {_id:idGrupo}, 
            {$push:{
                "listHomeworks":idHomework.toString()
            }}
        )
        .then(result=>res.status(200).json(result))
        .catch(err=>res.status(500).json({msg:err}));
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }

    /*Homeworks.create(req.body)
    .then(result=>res.status(200).json(result))
    .catch(err=>res.status(500).json({msg:err}))*/

}


const getHomeworksByUser=async (req, res)=>{
    const idUser=req.params.idUser;
    try {
        const grupos=await groups
        .find({listStudents:{$all:idUser}})
        .populate({
            path: "listHomeworks",
            model: "Tarea"
        })
        //Aplano el array resultante
        const listHomeworks=grupos.reduce((acc, el)=>{
            return acc.concat(el.listHomeworks)
        }, [])
        res.status(200).json(listHomeworks)
    } catch (error) {
        res.send({
            status: 400,
            message: `Error: ${error}`,
        });
    }
}

const getHomeworksByTeacher=async(req, res)=>{
    const idUser=req.params.idUser;
    try {
        const grupos=await groups
        .find({teacher:idUser})
        .populate({
            path: "listHomeworks",
            model: "Tarea"
        })
        let listHomeworks=grupos.reduce((acc, el)=>{
            return acc.concat(el.listHomeworks)
        }, [])
        
        listHomeworks=listHomeworks.filter(element=>element.status==true)

        res.status(200).json(listHomeworks)
    } catch (error) {
        res.send({
            status: 400,
            message: `Error: ${error}`,
        });
    }
}

const updateStatusHomework=async(req,res)=>{
    const idHomework=req.params.homeworkId;
    try {
        const homework=await Homeworks.updateOne({_id:{$eq:idHomework}}, {$set:{status:false}}, {new: true} )
        res.status(200).json(homework)
    } catch (error) {
        res.send({
            status: 400,
            message: `Error: ${error}`,
        });
    }
}

module.exports={
    getHomeworks,
    getHomeworkById,
    updateHomework,
    addHomeworkStudent,
    createHomework,
    getHomeworksByUser,
    getHomeworksByTeacher,
    updateStatusHomework
}