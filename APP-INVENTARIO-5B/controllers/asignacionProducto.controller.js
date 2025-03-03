const asignacionProductoService = require('../services/asignacionProducto.service');
const AsignacionProductoService = require('../services/asignacionProducto.service');

class AsignacionProductoController {
    async getAllAsignacionesActivas(req, res){
        try {
            const asignacionesActivas = await AsignacionProductoService.getAllAsignacionesActivas();
            res.json(asignacionesActivas);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async createAsignacionProducto(req, res){
        try {
            // Validar que el id de la persona y el id del producto vengan en el body
            const personaId = req.body.persona;
            if (!personaId || personaId == "" || personaId == null || personaId == undefined) {
                throw new Error("El id de la persona es requerido");
            }

            const productoId = req.body.producto;
            if (!productoId || productoId == "" || productoId == null || productoId == undefined) {
                throw new Error("El id del producto es requerido");
            }
            
            const asignacionCreada = await AsignacionProductoService.createAsignacionProducto(personaId, productoId);
            res.json(asignacionCreada);

        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async createAsignacionProductos(req, res) {
        try {
            // Validar que el id de la persona y el id del producto vengan en el body
            const personaId = req.body.persona;
            if (!personaId || personaId == "" || personaId == null || personaId == undefined) {
                throw new Error("El id de la persona es requerido");
            }

            const productos = req.body.producto;
            if (!productos || productos.length == 0 || productos == null || productos == undefined) {
                throw new Error("Los productos son requeridos");
            }
            
            const asignacionesCreadas = await AsignacionProductoService.createAsignacionProductos(personaId, productos);
            res.json(asignacionesCreadas);

        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async inactiveStatusAsignacionProducto(req, res){
        try {
            const asignacionesInactivas = req.params.id;
            if (!asignacionesInactivas || asignacionesInactivas == '' || asignacionesInactivas == null || asignacionesInactivas == undefined) {
                throw new Error('El id de la asignación es requerido');
            }

            const asignaciones = await asignacionProductoService.inactiveStatusAsignacionProducto(asignacionesInactivas);
            res.status(200).json(asignaciones);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async getAllAsignacionProductoById(req, res){
        try {
            const personaId = req.params.id;
            if (!personaId || personaId == "" || personaId == null || personaId == undefined) {
                throw new Error("El id de la persona es requerido");
                
            }
            console.log(personaId);

            const persona = await AsignacionProductoService.getAllAsignacionProductoById(req.params.id);
            res.json(persona);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

module.exports = new AsignacionProductoController();