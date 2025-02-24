const ProductoService = require('../services/producto.service');

class ProductoController {
    async getAllProductos(req, res) {
        try {
            const productos = await ProductoService.getAllProductos();
            res.json(productos); // Devuelve el status 200
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async createProducto(){
        try {
            const producto = await ProductoService.createProducto(req.body);
            res.json(producto);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    




}

module.exports = new ProductoController();