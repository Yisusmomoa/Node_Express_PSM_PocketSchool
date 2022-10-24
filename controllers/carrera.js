const carrers=require('../Carrers.js')

const getAllCarrers=(req, res)=>{
    res.json(carrers);
}

const getIdCarrer=(req, res)=>{
    const idCarrer=req.params.idCarrer;
    const carrer=carrers.find(element=>{
        return element.id===idCarrer
    });
    if (!carrer) {
        return res.status(404).json({"msg": "Carrer not found"})
    }
    res.json(carrer)
}

const getListGroupsByCarrer=(req, res)=>{
    const idCarrer=req.params.idCarrer;
    const carrer=carrers.find(element=>{
        return element.id===idCarrer
    }); 
    if (!carrer) {
        return res.status(404).json({"msg": "Carrer not found"})
    }
    res.json(carrer.listGroups)
}

const getListStudentsByCarrer=(req, res)=>{
    const idCarrer=req.params.idCarrer;
    const carrer=carrers.find(element=>{
        return element.id===idCarrer
    }); 
    if (!carrer) {
        return res.status(404).json({"msg": "Carrer not found"})
    }
    res.json(carrer.listUsers) 
}

module.exports={
    getAllCarrers,
    getIdCarrer,
    getListGroupsByCarrer,
    getListStudentsByCarrer
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