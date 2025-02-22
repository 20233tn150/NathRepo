const personaService = require("../services/persona.service");

class PersonaController{
    async getAllPersonas(req, res){ // req es la petición y siempre manada algo
        try{
            const personas = await personaService.getAllPersonas();
            // Por defecto siempre retorna 200 sino se le especifica el status
            // 200 -> éxito | OK
            res.status(200).json(personas);
        }catch(error){
            res.status(400).json({message: error.message});
        }
    }


    async getPersonaById(req, res){
        try{
            // Validar que el id venga en la petición
            const personaId = req.params.id;
            if (!personaId || personaId == '' || personaId == null || personaId == undefined){
                throw new Error('El id de la persona es requerido');
            }

            const persona = await personaService.getPersonaById(personaId);
            res.json(persona);
        }catch(error){
            res.status(400).json({message: error.message});
        }
    }

    async createPersona(req, res){
        try{
            const persona = await personaService.createPersona(req.body);
            res.json(persona);
        } catch(error){
            res.status(400).json({message: error.message});
        }
    }


    async updatePersona(req, res){
        try{
            // Validar que el id venga en la petición
            const personaId = req.params.id;
            if (!personaId || personaId == '' || personaId == null || personaId == undefined) {
                throw new Error('El id de la persona es requerido');
            }

            const persona = await personaService.updatePersona(personaId, req.body);
            res.json(persona);

        } catch(error){
            res.status(400).json({message: error.message});

        }
    }


    async deletePersona(req, res) {
        try {
            // Validar que el id venga en la petición
            const personaId = req.params.id;
            if (!personaId || personaId == '' || personaId == null || personaId == undefined) {
                throw new Error('El id de la persona es requerido');
            }
    
            // Llamar al servicio para eliminar la persona
            const personas = await personaService.deletePersona(personaId);
            res.status(200).json(personas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    
}

module.exports = new PersonaController();

/* 
{
    "nombre": "Santi",
    "apellido": "Murga",
    "fechaNacimiento": "2005-01-04",
    "rfc": "MUAA050401AAA",
    "correo":"20233tn150@utez.edu.mx"
}
*/