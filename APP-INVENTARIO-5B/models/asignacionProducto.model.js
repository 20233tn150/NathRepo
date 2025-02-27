const mongoose = require('mongoose')

const asignacionProductoSchema = new mongoose.Schema({
    persona: {type: mongoose.Schema.Types.ObjectId, ref: 'Persona', required: true},
    producto: {type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true},
    fechaAsignacion: {type: Date, required: true},
    estado: {type: String, required: true}
});

module.exports = mongoose.model('AsignacionProducto', asignacionProductoSchema);



/* 
{
    "persona": "67c0d6a95f837371c9482ca4",
    "producto": "67c0d58b5f837371c9482c9c"
}
*/
