const Homeworks=require('../Homework.js')
const crypto=require('crypto');

const getHomeworks=(req, res)=>{
    res.json(Homeworks);
}

const getHomeworkById=(req, res)=>{
    const id=req.params.homeworkId;
    const homework=Homeworks.find(element=>element.id===id);
    if (!homework) {
        return res.status(404).json({"msg": "Homework not found"})
    }
    res.json(homework);
}

const updateHomework=(req, res)=>{
    const id=req.params.homeworkId;
    const index=Homeworks.findIndex(element=>element.id=id);
    if (index==-1) {
        return res.status(404).json({msg:"Homework not found"})
    }
    const updateHomework={
        id:Homeworks[index].id,
        title:req.body.title || Homeworks[index].title,
        description:req.body.description || Homeworks[index].description,
        pdfs:[],
        DateInit:new Date(),
        DateEnd:new Date(),
        listHomeworksStudents:[]
    }
    Homeworks[index]=updateHomework;
    res.status(200).json({msg:"Homework updated"});
}

const addPdfHomework=(req, res)=>{


}

const addHomeworkStudent=(req, res)=>{
    const id=req.params.homeworkId;
    const index=Homeworks.findIndex(element=>element.id=id);
    if (index==-1) {
        return res.status(404).json({msg:"Homework not found"})
    }
    const homeworkStudent={
        id:crypto.randomUUID(),
        dateDelivery:new Date(),
        pdfs:[],
        student:{
            id:req.body.id,
            name:req.body.name,
            user:req.body.name,
            email:req.body.email,
        },
        status:false
    }
    const tareas=Homeworks[index].listHomeworksStudents;
    tareas.push(homeworkStudent);
    Homeworks[index].listHomeworksStudents=tareas;
    // console.log(tareas)
    res.status(200).json({msg:"Homework was add succesfully"})
}

module.exports={
    getHomeworks,
    getHomeworkById,
    updateHomework,
    addPdfHomework,
    addHomeworkStudent
}