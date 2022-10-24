const express=require('express')
const app=express();
const bodyParser=require('body-parser')

const productsRouter=require('./routes/products.js')
const usersRouter=require('./routes/usuarios.js')
const carrersRouter=require('./routes/carrera.js')
const groupsRouter=require('./routes/grupo.js')
const homeworkRouter=require('./routes/homework.js')

const products=require('./products.js');

const PORT=5000
app.use(express.json())//Middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(PORT, ()=>{
    console.log(`Server: ${PORT}`)
})

app.use('/api', [productsRouter, usersRouter, carrersRouter, groupsRouter, homeworkRouter])
//Query String
app.get('/api/products/query', (req, res)=>{
    const name=req.query.name.toLowerCase();
    const productsResult=products.filter(product=>{
        return product.name.toLowerCase().includes(name)
    })
    if (productsResult<1) {
        return res.status(200).json({"msg": "No products matched your search"})
    }
    res.json(productsResult)
})



