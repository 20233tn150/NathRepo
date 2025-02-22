const Persona = require("../models/persona.model");

class PersonaRepository {
  // Buscar todas las personas
  async getAllPersona() {
    return await Persona.find();
  }


  // Buscar pro ID
  async getPersonaById(id){
    return await Persona.findById(id);
  }


  // Buscar una persona por RFC
  async getPersonaByRFC(rfc){ 
    return await Persona.findOne({rfc: rfc}); // Nombre del Modelo : Valor que le mandamos
  }


  // Buscar una persoan por Correo
  async getPersonaByCorreo(correo){ 
    return await Persona.findOne({correo: correo}); // Nombre del Modelo : Valor que le mandamos
  }


  // Crear una persona
  async createPersona(persona){
    return await Persona.create(persona);
  }


  // Actualzar una Persona
  async updatePersona(id, persona){
    return await Persona.findByIdAndUpdate(id, persona, {new : true}); // Nos trae la persona ya actualizada ({new : true})
  }


  // Eliminar una persona
  async deletePersona(id){
    return await Persona.findByIdAndDelete(id);
  }

  // Buscar si hay otro RFC igual que la persona que le estoy mandando(id)
  // el RFC sea igual al rfc que le estoy mandando
  // y el id sea diferente al id que le estoy mandando
  async getPersonaByRFCAndNotId(id, rfc){
    return await Persona.findOne({_id: {$ne: id, rfc: rfc}})
  }

  // Lo mismo que arriba :)
  async getPersonaByCorreoAndNotId(id, correo){
    return await Persona.findOne({_id: {$ne: id, correo: correo}})
  }

}

module.exports = new PersonaRepository();
