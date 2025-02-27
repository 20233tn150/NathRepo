const AsignacionProducto = require('../models/asignacionProducto.model');

class AsignacionProductoRepository {
    async getAllAsignacionesActivas() {
        return await AsignacionProducto.find({estado : 'Activo'}).populate('persona').populate('producto');
    }
    
    async getAllAsignacionesProductosByPersona(persona) {
        return await AsignacionProducto.find({persona : persona}).populate('producto');
    }

    async createAsignacionProducto(personaId, productoId) {
        const fechaAsignacion = new Date();
        fechaAsignacion.setHours(0, 0, 0, 0);
        return await AsignacionProducto.create({persona : personaId, producto : productoId, fechaAsignacion : fechaAsignacion, estado : 'Activo'}); 
    }

    async inactiveStatusAsignacionProducto() {
        return await AsignacionProducto.findByStatusInactive();
    }

    async getAllAsignacionProductoById(id) {
        return await AsignacionProducto.findById(id);
    }

}

module.exports = new AsignacionProductoRepository();