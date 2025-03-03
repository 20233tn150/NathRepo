const AsignacionProductoRepository = require('../repositories/asignacionProducto.repository');
const PersonaRepository = require('../repositories/persona.repository');
const ProductoRepository = require('../repositories/producto.repository');
const Validaciones = require('../utils/validation');

class AsignacionProductoService {
    async getAllAsignacionesActivas() {
        return await AsignacionProductoRepository.getAllAsignacionesActivas();
    }

    async createAsignacionProducto(personaId, productoId){
        // Vaidar que la persona exita igual que el producto
        const persona = await PersonaRepository.getPersonaById(personaId);
        if (!persona) {
            throw new Error("La persona no existe");
        }

        const producto = await ProductoRepository.getProductoById(productoId);
        if (!producto) {
            throw new Error("El producto no existe");
        }

        const asignacionCreada = await AsignacionProductoRepository.createAsignacionProducto(personaId, productoId);
        return asignacionCreada;
    }

    async createAsignacionProductos(personaId, productos) {
        // Vaidar que la persona exita igual que el producto
        const persona = await PersonaRepository.getPersonaById(personaId);
        if (!persona) {
            throw new Error("La persona no existe");
        }

        // Declaramos un arreglo para guardar las asignaciones creadas
        let asignaciones = [];

        // Recorrer el arreglo de productosId, nos mandará un arreglo de los ids de los productos
        for (let index = 0; index < productos.length; index++) {
            // En productoId se guarda el Id del producto que se encuentra en la posición index del arreglo productos
            const productoId = productos[index];
            
            try {
                const asignacionCreada = await AsignacionProductoRepository.createAsignacionProducto(personaId, productoId); 
                asignaciones.push(asignacionCreada);  
            } catch (error) {
                const asignacionError = {producto: productoId, error : error.message};
                /*
                    {
                        producto: '123144'
                        error: 'El producto no existe'
                    }
                */
                asignaciones.push(asignacionError);
            }

        }
    }

    async inactiveStatusAsignacionProducto() {
        return await AsignacionProductoRepository.inactiveStatusAsignacionProducto();
    }

    async getAllAsignacionProductoById(productoId) {
        const producto = await AsignacionProductoRepository.getAllAsignacionProductoById(productoId);
        if (!producto) {
            throw new Error("El producto no existe");
        }

        return producto;
    }

}

module.exports = new AsignacionProductoService();