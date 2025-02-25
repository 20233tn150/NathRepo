const express = require('express');
const ProductoController = require('../controllers/producto.controller');
const router = express.Router();

// Obtener todos los productos
router.get('/', ProductoController.getAllProductos);

// Crear productos
router.post('/', ProductoController.createProducto);

// Obtener por Id
router.get('/id/:id', ProductoController.getProductoById);

// Obtener por Número de Serie
router.get('/numSerie/:numSerie', ProductoController.getProductosByNumSerie);

module.exports = router;