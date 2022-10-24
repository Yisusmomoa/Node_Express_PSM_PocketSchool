const groups=require('../Groups.js')
const crypto=require('crypto');
const listaUsuarios=require('../Usuarios.js');

const getGroups=(req, res)=>{
    res.json(groups);
}

const getGroupById=(req, res)=>{
    const id=req.params.groupId;
    const group=groups.find(group=>group.id===id)
    if (!group) {
        return res.status(404).json({"msg": "Group not found"})
    }
    res.json(group);
}

const getStudentsByIdGroup=(req, res)=>{
    const id=req.params.groupId;
    const group=groups.find(group=>group.id===id)
    if (!group) {
        return res.status(404).json({"msg": "Group not found"})
    }
    res.json(group.listStudents);
}

const getTeacherByIdGroup=(req, res)=>{
    const id=req.params.groupId;
    const group=groups.find(group=>group.id===id)
    if (!group) {
        return res.status(404).json({"msg": "Group not found"})
    }
    res.json(group.Teacher);
}

const getHomeworksByIdGroup=(req, res)=>{
    const id=req.params.groupId;
    const group=groups.find(group=>group.id===id)
    if (!group) {
        return res.status(404).json({"msg": "Group not found"})
    }
    res.json(group.listHomeworks);
}

const postCreateGroup=(req, res)=>{
    const newGroup={
        id:crypto.randomUUID(),
        nameGroup:req.body.nameGroup,
        listStudents:req.body.listStudents,
        Teacher:listaUsuarios.find(element=>element.typeUser==="Teacher"),
        listHomeworks:[],
        date:new Date()
    }
    if(!newGroup.nameGroup){
        return res.status(400).json({msg: "content missing"})
    }
    groups.push(newGroup);
    res.status(201).json(newGroup);

}

const putUpdateGroup=(req, res)=>{
    const id=req.params.groupId;
    const index=groups.findIndex(element=>element.id===id);
    if (index===-1) {
        return res.status(404).json({msg:"Group not found"})
    }
    const updateGroup={
        id:groups[index],
        nameGroup:req.body.nameGroup || groups[index].nameGroup
    }
    groups[index]=updateGroup;
    res.status(200).json({msg:"Group updated"})
}

const deleteGroup=(req, res)=>{
    const id=req.params.groupId;
    const index=groups.findIndex(group=>group.id===id);
    if (index===-1) {
       return res.status(404).json({msg:"Group not found"})
    }
    groups.splice(index, 1);
    res.status(200).json({msg: "Group deleted"})
}

const addStudentsGroup=(req, res)=>{
    const id=req.params.groupId;
    const listStudents=req.body.listStudents;
    const index=groups.findIndex(element=>element.id===id);
    if (index===-1) {
        return res.status(404).json({msg:"Group not found"})
    }
    groups[index].listStudents.push(listStudents);
    res.status(200).json(groups[index].listStudents)
}

const addHomeworkGroup=(req, res)=>{
    const id=req.params.groupId;
    const index=groups.findIndex(element=>element.id===id);
    if (index===-1) {
        return res.status(404).json({msg:"Group not found"})
    }
    const newHomework={
        id:crypto.randomUUID(),
        title:req.body.title,
        description:req.body.description,
        pdfs:[],
        DateInit:new Date(),
        DateEnd:new Date(),
        listHomeworksStudents:[]
    }
    if (!newHomework.title || !newHomework.description) {
        return res.status(400).json({msg: "content missing"})
    }
    groups[index].listHomeworks.push(newHomework);
    res.status(201).json(newHomework)
}

module.exports={
    getGroups,
    getGroupById,
    getStudentsByIdGroup,
    getTeacherByIdGroup,
    getHomeworksByIdGroup,
    postCreateGroup,
    putUpdateGroup,
    deleteGroup,
    addStudentsGroup,
    addHomeworkGroup
}