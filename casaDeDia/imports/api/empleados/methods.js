import { Meteor } from 'meteor/meteor';
import { Empleados } from "../empleados/empleados";

Meteor.methods({


    "crearEmpleado"(nombre,apellidos,apodo,contrasena,email) {
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

    "editarEmpleado"(idVoluntario,nombre,apellidos,apodo,contrasena,email) {
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










