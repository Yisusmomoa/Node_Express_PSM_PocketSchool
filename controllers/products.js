const products=require('../products.js')

const getProducts=((req, res)=>{
    const products_partial=products.map(element=>{
        return {id:element.id, name:element.name}
    })
    res.json(products_partial);
})

const getProduct=(req, res)=>{
    const id=Number(req.params.productId);
    const prod=products.find(product=>product.id===id)
    if (!prod) {
        return res.status(404).json({"msg": "Product not found"})
    }
    res.json(prod);
}

const createProduct=(req, res)=>{
    const newProduct={
        id:products.length+1,
        name:req.body.name,
        price:req.body.price
    }
    products.push(newProduct);
    res.status(201).json(newProduct);
}

const updateProduct=(req, res)=>{
    const id=Number(req.params.productId);
    const index=products.findIndex(product=>product.id===id);
    if (index===-1) {
       return res.status(404).json({msg:"Product not found"})
    }
    const updateProduct={
        id:products[index].id,
        name:req.body.name,
        price:req.body.price
    }
    products[index]=updateProduct;
    res.status(200).json({msg:"Product updated"})
}

const deleteProduct=(req, res)=>{
    const id=Number(req.params.productId);
    const index=products.findIndex(product=>product.id===id);
    if (index===-1) {
       return res.status(404).json({msg:"Product not found"})
    }
    products.splice(index, 1);
    res.status(200).json({msg: "Product deleted"})
}

module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
