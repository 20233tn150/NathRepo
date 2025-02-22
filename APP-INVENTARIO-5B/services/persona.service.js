const PersonaRepository = require('../repositories/persona.repository')
const Validaciones = require('../utils/validation')
const Utils = require('../utils/utils')

class PersonaService{
    async getAllPersonas(){
        return await PersonaRepository.getAllPersona();
    }

    async getPersonaById(id){
        const persona = await PersonaRepository.getPersonaById(id);
        if (!persona) {
            throw new Error('Persona no encontrada');
        }

        return persona;
    }


    async createPersona(persona){
        // Valdiar que todos los campos obligatorios vengan
        if  (!persona.nombre || !persona.apellido || !persona.fechaNacimiento || !persona.rfc || !persona.correo){
            throw new Error('Todos los campos son requeridos');
        }
        
        // Validar que el formato de rfc y del correo sea válido
        Validaciones.validarRFC(persona.rfc);
        Validaciones.validarCorreo(persona.correo);

        // Validar que el rfc no exista en la BD
        const personaByRFC = await PersonaRepository.getPersonaByRFC(persona.rfc);

        // Validar que el correo no exista en la BD
        const personaByCorreo = await PersonaRepository.getPersonaByCorreo(persona.correo);

        if (personaByRFC) {
            throw new Error('El RFC ya existe');
        }

        if (personaByCorreo) {
            throw new Error('El correo ya existe');
        }

        // Validar que la fecha de nacimiento sea válida
        if (Utils.calcularEdad(persona.fechaNacimiento) < 18) {
            throw new Error('La persona debe de ser mayor de edad');
        }

        return await PersonaRepository.createPersona(persona);
    }

    async updatePersona(id, persona){
        // Validar que la persona exista
        const personaById = await PersonaRepository.getPersonaById(id);
        if (!personaById) {
            throw new Error('Persona no encontrada');
        }

        // Valdiar que todos los campos obligatorios vengan
        if  (!persona.nombre || !persona.apellido || !persona.fechaNacimiento || !persona.rfc || !persona.correo){
            throw new Error('Todos los campos son requeridos');
        }

        // Validar que el formato de rfc y del correo sea válido
        Validaciones.validarRFC(persona.rfc);
        Validaciones.validarCorreo(persona.correo);

        // Validar que el RFC no exista en la BD
        // Validar que no lo tengan otras personas, que no sea la misma persona
        const personaByRFCAndNotId = await PersonaRepository.getPersonaByRFCAndNotId(id, persona.rfc);
        if (personaByRFCAndNotId) {
            throw new Error('El RFC ya existe');
        }

        const personaByCorreoAndNotId = await PersonaRepository.personaByCorreoAndNotId(id, persona.correo);
        if (personaByCorreoAndNotId) {
            throw new Error('El correo ya existe');
        }

        // Validar que la fecha de nacimiento sea válida
        if (Utils.calcularEdad(persona.fechaNacimiento) < 18) {
            throw new Error('La persona debe de ser mayor de edad');
        }
    }


    async deletePersona(id) {
        // Validar que la persona exista antes de intentar eliminarla
        const persona = await PersonaRepository.getPersonaById(id);
        if (!persona) {
            throw new Error('Persona no encontrada');
        }

        // Llamar al repositorio para eliminar la persona
        await PersonaRepository.deletePersona(id);
    }
    
}

module.exports = new PersonaService();