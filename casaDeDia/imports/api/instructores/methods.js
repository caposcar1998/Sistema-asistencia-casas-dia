import { Meteor } from 'meteor/meteor';
import { Instructores } from "../instructores/instructores";

Meteor.methods({


    "crearInstructor"(nombre,apellidos,apodo,contrasena,email) {
        Instructores.insert(
            {
                nombre: nombre,
                apellidos: apellidos,
                apodo: apodo,
                contrasena: contrasena,
                email: email
            }
        )
    },

    "editarInstructor"(idVoluntario,nombre,apellidos,apodo,contrasena,email) {
        Instructores.update(
            { _id: idInstructor },
            {
                $set:
                {
                    nombre: nombre,
                    apellidos: apellidos,
                    apodo: apodo,
                    contrasena: contrasena,
                    email: email
                }
            }
        )
    },

    "borrarInstructor"(idInstructor) {
        Instructores.remove(
            {
                "_id": idInstructor
            }
        )
    },

    "leerInstructor"() {
        return Instructores.find().fetch();
    }


});










