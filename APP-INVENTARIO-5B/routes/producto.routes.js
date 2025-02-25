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

// Actualizar productos
router.put('/:id', ProductoController.updateProducto);

// Eliminar productos
router.delete("/id/:id", ProductoController.deleteProducto);

module.exports = router;