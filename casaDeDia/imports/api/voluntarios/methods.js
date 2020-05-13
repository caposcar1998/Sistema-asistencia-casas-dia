import { Meteor } from 'meteor/meteor';
import { Voluntarios } from "../voluntarios/voluntarios";

Meteor.methods({


    "crearVoluntario"(nombre,apellidos,apodo,contrasena,email) {
        Voluntarios.insert(
            {
                nombre: nombre,
                apellidos: apellidos,
                apodo: apodo,
                contrasena: contrasena,
                email: email
            }

        )
    },

    "editarVoluntario"(idVoluntario,nombre,apellidos,apodo,contrasena,email) {
        Voluntarios.update(
            { _id: idVoluntario },
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

    "borrarVoluntario"(idVoluntario) {
        Voluntarios.remove(
            {
                "_id": idVoluntario
            }
        )
    },

    "leerVoluntario"() {
        return Voluntarios.find().fetch();
    }


});










