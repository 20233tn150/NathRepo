const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    fechaAdquisicion: {type: Date, required: true},
    numSerie: {type: String, required: true, unique: true},
    numInventario: {type: String, required: true}
});

module.exports = mongoose.model('Producto', productoSchema);



/* 
{
    "nombre": "Pays de queso",
    "precio": 22,
    "fechaAdquisicion": "2005-01-04",
    "numSerie": "111",
    "numInventario":"001"
}



// Ejemplo de uso
const productoData = {
    nombre: "Pc Gamer",
    precio: 22000,
    fechaAdquisicion: "2025-02-24", // Asegúrate de que esta cadena sea una fecha válida
    numSerie: "GN500",
    numInventario: "10"
};

const Producto = mongoose.model('Producto', productoSchema);

async function crearProducto(productoData) {
    // Asegúrate de que fechaAdquisicion sea un objeto Date
    productoData.fechaAdquisicion = new Date(productoData.fechaAdquisicion);

    // Verifica si la conversión fue exitosa
    if (isNaN(productoData.fechaAdquisicion.getTime())) {
        throw new Error('Fecha de adquisición no válida');
    }

    const nuevoProducto = new Producto(productoData);
    await nuevoProducto.save();
    return nuevoProducto;
}

crearProducto(productoData)
    .then(producto => console.log('Producto creado:', producto))
    .catch(error => console.error('Error al crear el producto:', error));
*/