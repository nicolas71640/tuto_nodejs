const express = require('express');
const router = express.Router();
const ProductCtrl = require('../controllers/product')

router.post('/', ProductCtrl.createProduct);
router.get('/', ProductCtrl.getAllProducts);
router.get('/:id', ProductCtrl.getProduct);
router.put('/:id', ProductCtrl.modifyProduct);
router.delete('/:id', ProductCtrl.deleteProduct);

module.exports = router;

