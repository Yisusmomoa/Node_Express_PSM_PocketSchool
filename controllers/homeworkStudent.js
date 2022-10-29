const homeworkStudents=require('../HomeworkStudent.js')

const getHomeworkStudentById=(req, res)=>{
    const id=req.params.homeworkStudentId;
    const homework=homeworkStudents.find(element=>element.id===id);
    if (!homework) {
        return res.status(404).json({"msg": "Homework not found"})
    }
    res.json(homework);
}

module.exports={
    getHomeworkStudentById
}