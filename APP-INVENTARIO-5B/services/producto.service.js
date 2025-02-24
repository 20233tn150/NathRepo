const ProductoRepository = require('../repositories/producto.repository');
const Validaciones = require('../utils/validation');

class ProductoService {
    async getAllProductos(){
        return await ProductoRepository.getAllProductos();
    }

    async createProducto(producto){
        // Validar que todos los campos obligatorios vengan
        if  (!producto.nombre || !producto.precio || !producto.fechaAdquisicion || !producto.numSerie){
            throw new Error('Todos los campos son requeridos');
        }

        // Validar que el numero de serie no exista
        const productoByNumSerie = await ProductoRepository.getProductosByNumSerie(producto.numSerie);
        if (productoByNumSerie) {
            throw new Error('El número de serie ya existe');
        }

        // Validar que el precio no sea negativo
        if (producto.precio < 1) {
            throw new Error('El precio debe de ser mayor a 0');
            
        }

        // Validar que la fecha de adquision tenga formato válido
        if (!Validaciones.esFechaValida(producto.fechaAdquisicion)) {
            throw new Error('La fehca de adquisición no tiene el formato correcto');
        }

        // Generar numero de inventario
        // año-consecutivo 2025-001
        // Obtener el año de asquisicion
        // 2025-02-24
        const yearAdquisicion = producto.fechaAdquisicion.split('-')[0];
        // 2025 [0] | 02 [1] | 24 [2]

        let countYear = await ProductoRepository.contrarProductorByYear(yearAdquisicion);

        // Incrementar en 1 el contador
        countYear++;

        // padStart funciona para agregar ceros a la izquierda si el número no tiene digitos
        producto.numInventario = `${yearAdquisicion}-${countYear.toString().padStart(3, '0')}`;

        return await ProductoRepository.createProducto(producto);
    }



}

module.exports = new ProductoService();