const carrers=require('../models/Carrera');

const getAllCarrers=(req, res)=>{
    carrers.find({})
    .then(result=>res.status(200).json({result}))
    .catch(err=>err.status(500).json({msg:err}))
}
const createCarrer=(req, res)=>{
    carrers.create(req.body)
    .then(result=>res.status(201).json(result))
    .catch(err=>res.status(500).json({msg:err}))
}

const getIdCarrer=(req, res)=>{
    const idCarrer=req.params.idCarrer;
    carrers.findById(idCarrer)
    .then(result=>res.status(200).json({result}))
    .catch(err=>err.status(500).json({msg:err}))

}

const getListGroupsByCarrer=(req, res)=>{
    const idCarrer=req.params.idCarrer;
    carrers.findById(idCarrer).select("listGroups")
    .then(result=>res.status(200).json(result))
    .catch(err=>err.status(500).json({msg:err}))

}

const getListStudentsByCarrer=(req, res)=>{
    const idCarrer=req.params.idCarrer;
    carrers.findById(idCarrer).select("listStudents")
    .then(result=>res.status(200).json(result))
    .catch(err=>err.status(500).json({msg:err}))
}

module.exports={
    getAllCarrers,
    getIdCarrer,
    getListGroupsByCarrer,
    getListStudentsByCarrer,
    createCarrer
}

//Query String
/*
const name=req.query.name.toLowerCase();
    const carrersResult=carrers.filter(carrer=>{
        return carrer.name.toLowerCase().includes(name)
    })
    if (carrersResult<1) {
        return res.status(200).json({"msg": "No carrers matched your search"})
    }
    res.json(carrersResult)
*/