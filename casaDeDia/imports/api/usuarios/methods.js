import { Meteor } from 'meteor/meteor';
import { Usuarios } from "../usuarios/usuarios";

Meteor.methods({


    "crearUsuario"(nombre, usuario, contrasena, correo, permisos) {
        Usuarios.insert(
            {
                nombre: nombre,
                usuario: usuario,
                contrasena: contrasena,
                correo: correo,
                permisos: permisos
            }

        )
    },

    "editarUsuario"(nombre, usuario, contrasena, correos, permisos) {
        Usuarios.update(
            { _id: idUsuarios },
            {
                $set:
                {
                    nombre: nombre,
                    usuario: usuario,
                    contrasena: contrasena,
                    correo: correo,
                    permisos: permisos
                }
            }
        )
    },

    "borrarUsuarios"(idUsuarios) {
        Usuarios.remove(
            {
                "_id": idUsuarios
            }
        )
    },

    "leerUsuario"() {
        return Usuarios.find().fetch();
    }


});


