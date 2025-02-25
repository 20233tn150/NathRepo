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
    "precio": 20,
    "fechaAdquisicion": "2005-01-04",
    "numSerie": "241"
}
*/
