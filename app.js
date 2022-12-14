const express=require('express')
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser')
require('dotenv').config({path:"./fichier.env"})

//app.use(express.json())//Middleware

app.use(bodyParser.json({limit: '50mb', extended:true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
//const no quites esto
const noquitesestord=1

const productsRouter=require('./routes/products.js')
const usersRouter=require('./routes/usuarios.js')
const carrersRouter=require('./routes/carrera.js')
const groupsRouter=require('./routes/grupo.js')
const homeworkRouter=require('./routes/homework.js')
const homeworkStudent=require('./routes/homeworkStudent')

const PORT=5000

console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI)
    .then((result)=>{
        app.listen(PORT)
        // console.log(result);
        console.log("conexión exitosa");
    })
    .catch((err)=>console.log(err))

// app.listen(PORT, ()=>{
//     console.log(`Server: ${PORT}`)
// })

app.use('/api', [productsRouter, usersRouter, carrersRouter, groupsRouter, homeworkRouter, homeworkStudent])


//Query String
// app.get('/api/products/query', (req, res)=>{
//     const name=req.query.name.toLowerCase();
//     const productsResult=products.filter(product=>{
//         return product.name.toLowerCase().includes(name)
//     })
//     if (productsResult<1) {
//         return res.status(200).json({"msg": "No products matched your search"})
//     }
//     res.json(productsResult)
// })



