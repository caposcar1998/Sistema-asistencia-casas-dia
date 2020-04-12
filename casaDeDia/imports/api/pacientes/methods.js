import { Meteor } from 'meteor/meteor';
import { Pacientes } from "../pacientes/pacientes";

Meteor.methods({

    
    "crearPaciente"(nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente) {
        Pacientes.insert(
            {
                nombre: nombre,
                apellido: apellido,
                fechaNacimiento: fechaNacimiento,
                direccion: direccion,
                telefono: telefono,
                telefonoInteligente: telefonoInteligente
            }

        ); 
     },

    
    "editarPaciente"(nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente) { 

    },

    "borrarPaciente"(idPaciente) {
        Pacientes.remove(
            {
                "_id": idPaciente 
            }
        )
    },

    "leerPacientes"() {

    }
    
    
    });

