const productoService = require("../services/producto.service");

class ProductoController {
  async getAllProductos(req, res) {
    try {
      const productos = await productoService.getAllProductos();
      res.json(productos); // Devuelve el status 200
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async createProducto(req, res) {
    try {
      const producto = await productoService.createProducto(req.body);
      res.json(producto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getProductoById(req, res) {
    try {
      // Validar que el id venga en la petición
      const productoId = req.params.id;
      if (
        !productoId ||
        productoId == "" ||
        productoId == null ||
        productoId == undefined
      ) {
        throw new Error("El id del producto es requerido");
      }

      const producto = await productoService.getProductoById(productoId);
      res.json(producto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getProductosByNumSerie(req, res) {
    try {
      // Validar que el id venga en la petición
      const productoNumSerie = req.params.numSerie;
      if (
        !productoNumSerie ||
        productoNumSerie == "" ||
        productoNumSerie == null ||
        productoNumSerie == undefined
      ) {
        throw new Error("El número de serie del producto es requerido");
      }

      const producto = await productoService.getProductosByNumSerie(
        productoNumSerie
      );
      res.json(producto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateProducto(req, res) {
    try {
      const producto = await productoService.updateProducto(
        req.params.id,
        req.body
      );
      res.json(producto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteProducto(req, res) {
    try {
                // Validar que el id venga en la petición
                const productoId = req.params.id;
                if (!productoId || productoId == '' || productoId == null || productoId == undefined) {
                    throw new Error('El id de la persona es requerido');
                }
        
                // Llamar al servicio para eliminar el producto
                const producto = await productoService.deleteProducto(productoId);
                res.status(200).json(producto);                
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
  }
}

module.exports = new ProductoController();
