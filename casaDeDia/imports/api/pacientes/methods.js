import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

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
     }

    });

