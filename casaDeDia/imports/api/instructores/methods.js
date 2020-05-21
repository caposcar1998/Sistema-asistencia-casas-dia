import { Meteor } from 'meteor/meteor';
import { Instructores } from "../instructores/instructores";
import { Accounts } from "meteor/accounts-base";

Meteor.methods({


    "crearInstructor"(nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor) {
        idUsuario = Accounts.createUser({
            username: apodo,
            password: contrasena,
            profile:{
                role: 'instructor'
            }
        }),

        Instructores.insert(
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

    "editarInstructor"(idInstructor,nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor,idUsuario) {
        Meteor.users.update(idUsuario,{
            $set:{
                username: apodo,
                
            }
        });

        if(contrasena != 'the same'){
            Accounts.setPassword(idUsuario, contrasena)
        }
        
        Instructores.update(
            { _id: idInstructor },
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

    "borrarInstructor"(idInstructor,idUsuario) {
        Meteor.users.remove(idUsuario);

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










