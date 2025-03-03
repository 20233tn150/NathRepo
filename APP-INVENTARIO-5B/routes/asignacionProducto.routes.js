const express = require('express');
const AsignacionProductoController = require('../controllers/asignacionProducto.controller');
const router = express.Router();

router.get('/activas', AsignacionProductoController.getAllAsignacionesActivas);

router.put('/inactivas/:id', AsignacionProductoController.inactiveStatusAsignacionProducto);

// router.get('/all', AsignacionProductoController.getAllAsignacionesProductosByPersona);

router.get('/idPersona/:id', AsignacionProductoController.getAllAsignacionProductoById);

router.post('/', AsignacionProductoController.createAsignacionProducto);

router.post('/asignacionProductos', AsignacionProductoController.createAsignacionProductos);

module.exports = router;