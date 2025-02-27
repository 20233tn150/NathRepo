const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    fechaNacimiento: {type: Date, required: true},
    rfc: {type: String, required: true, unique: true},
    correo: {type: String, required: true, unique: true}

})

module.exports = mongoose.model('Persona', PersonaSchema);

/* 
{
    "nombre": "Murga",
    "apellido": "Murga",
    "fechaNacimiento": "2005-01-04",
    "rfc": "MUAA050104AAA",
    "correo": "20233tn150"
}
*/