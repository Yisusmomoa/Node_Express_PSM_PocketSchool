const express = require('express')
const router=express.Router();

const {
    getProducts, 
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct 
}=require('../controllers/products.js')

router.get('/products/', getProducts);
router.get('/products/:productId', getProduct);
router.post('/products/', createProduct);
router.put('/products/:productId', updateProduct);
router.delete('/products/:productId', deleteProduct);

module.exports=router;

