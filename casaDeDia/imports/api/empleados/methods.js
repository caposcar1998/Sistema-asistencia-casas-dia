import { Meteor } from 'meteor/meteor';
import { Empleados } from "../empleados/empleados";

Meteor.methods({


    "crearEmpleado"(nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor ) {
        Empleados.insert(
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
        )
    },

    "editarEmpleado"(idEmpleado,nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor) {
        Empleados.update(
            { _id: idEmpleado },
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

    "borrarEmpleado"(idEmpleado) {
        Empleados.remove(
            {
                "_id": idEmpleado
            }
        )
    },

    "leerEmpleado"() {
        return Empleados.find().fetch();
    }


});










