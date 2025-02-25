const mongoose = require('mongoose')

const asignacionProductoSchema = new mongoose.Schema({
    persona: {type: mongoose.Schema.Types.ObjectId, ref: 'Persona', required: true},
    producto: {type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true},
    fechaAdquisicion: {type: Date, required: true},
    estado: {type: String, required: true}
});

module.exports = mongoose.model('AsignacionProducto', asignacionProductoSchema);



/* 
{
    "persona": "",
    "producto": "",
    "fechaAdquisicion": "2005-01-04",
    "estado": "Activo"
}
*/
