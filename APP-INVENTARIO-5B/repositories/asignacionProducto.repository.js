const AsignacionProducto = require('../models/asignacionProducto.model');

class AsignacionProductoRepository {
    async getAllAsignacionesActivas(estado) {
        return await AsignacionProducto.findByStatusActive(estado);
    }
    
    async getAllAsignacionesProductosByPersona(persona) {
        return await AsignacionProducto.findByPersona(persona);
    }

    async createAsignacionProducto(asignacionProducto) {
        return await AsignacionProducto.create(asignacionProducto); 
    }

    async inactiveStatusAsignacionProducto(estado) {
        return await AsignacionProducto.findByStatusInactive(estado);
    }

    async getAllAsignacionProductoById(id) {
        return await AsignacionProducto.findById(id);
    }
}

module.exports = new AsignacionProductoRepository();