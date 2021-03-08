const express = require('express');
const router = express.Router();

const { 
  getAllProducts, 
  getProductById 
} = require('../controllers/productController')

//@desc   Get all products from db
//@route  Get /api/products
//@access Public
router.get('/', getAllProducts)

//@desc   Get a product from db
//@route  Get /api/products/:id
//@access Public
router.get('/:id', getProductById)

module.exports = router;