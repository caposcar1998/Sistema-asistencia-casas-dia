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

        ) 
     },

    "editarPaciente"(idPaciente, nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente) { 
        Pacientes.update(
            { _id: idPaciente },
            {
                $set:
                {
                    nombre: nombre,
                    apellido: apellido,
                    fechaNacimiento: fechaNacimiento,
                    direccion: direccion,
                    telefono: telefono,
                    telefonoInteligente: telefonoInteligente
                }
            }
        )
    },

    "borrarPaciente"(idPaciente) {
        Pacientes.remove(
            {
                "_id": idPaciente 
            }
        )
    },

    "leerPacientes"() {
            return Pacientes.find().fetch();
    }
    
    
    });

