const Homeworks=require('../Homework.js')

const getHomeworks=(req, res)=>{
    res.json(Homeworks);
}

module.exports={
    getHomeworks
}