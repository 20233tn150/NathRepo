const AsignacionProductoRepository = require('../repositories/asignacionProducto.repository');
const Validaciones = require('../utils/validation');

class AsignacionProductoService {
    async getAllAsignacionesActivas(estado) {
        const asignacionProducto = await AsignacionProductoRepository.getAllAsignacionesActivas(estado);
                    if (!asignacionProducto) {
                        throw new Error('Asignación de Producto no encontrado');
                    }
                    return asignacionProducto;
    }

}

module.exports = new AsignacionProductoService();