const crypto=require('crypto')
const listHomeworksStudents=require('./HomeworkStudent.js')

const Homework=[
    {
        id:crypto.randomUUID(),
        title:"Tarea 1",
        description:"Descr tarea1",
        pdfs:[],
        DateInit:new Date(),
        DateEnd:new Date(),
        listHomeworksStudents:listHomeworksStudents
    },
    {
        id:crypto.randomUUID(),
        title:"Tarea 2",
        description:"Descr tarea2",
        pdfs:[],
        DateInit:new Date(),
        DateEnd:new Date(),
        listHomeworksStudents:[]
    },
    {
        id:crypto.randomUUID(),
        title:"Tarea 3",
        description:"Descr tarea3",
        pdfs:[],
        DateInit:new Date(),
        DateEnd:new Date(),
        listHomeworksStudents:listHomeworksStudents
    },
    {
        id:crypto.randomUUID(),
        title:"Tarea 4",
        description:"Descr tarea4",
        pdfs:[],
        DateInit:new Date(),
        DateEnd:new Date(),
        listHomeworksStudents:listHomeworksStudents
    }
]
// console.log(Homework)
module.exports=Homework