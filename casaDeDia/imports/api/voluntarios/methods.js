import { Meteor } from 'meteor/meteor';
import { Voluntarios } from "../voluntarios/voluntarios";

Meteor.methods({


    "crearVoluntario"(nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor) {
        idUsuario = Accounts.createUser({
            username: apodo,
            password: contrasena
        }),
        
        Voluntarios.insert(
            {
                nombre: nombre,
                apellidos: apellidos,
                apodo: apodo,
                contrasena: contrasena,
                email: email,
                visualizarAdultoMayor: visualizarAdultoMayor,
                editarAdultoMayor: editarAdultoMayor,
                visualizarVoluntario: visualizarVoluntario,
                editarVoluntario: editarVoluntario,
                visualizarInstructor: visualizarInstructor,
                editarInstructor: editarInstructor,
                idUsuario: idUsuario
            }

        )
    },

    "editarVoluntario"(idVoluntario,nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor,idUsuario) {
        Meteor.users.update(idUsuario,{
            $set:{
                username: apodo,
                
            }
        });

        if(contrasena != 'the same'){
            Accounts.setPassword(idUsuario, contrasena)
        }
        
        Voluntarios.update(
            { _id: idVoluntario },
            {
                $set:
                {
                    nombre: nombre,
                    apellidos: apellidos,
                    apodo: apodo,
                    contrasena: contrasena,
                    email: email,
                    visualizarAdultoMayor: visualizarAdultoMayor,
                    editarAdultoMayor: editarAdultoMayor,
                    visualizarVoluntario: visualizarVoluntario,
                    editarVoluntario: editarVoluntario,
                    visualizarInstructor: visualizarInstructor,
                    editarInstructor: editarInstructor
                }
            }
        )
    },

    "borrarVoluntario"(idVoluntario,idUsuario) {
        Meteor.users.remove(idUsuario);
        
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










