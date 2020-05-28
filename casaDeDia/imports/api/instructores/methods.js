import { Meteor } from 'meteor/meteor';
import { Instructores } from "../instructores/instructores";
import { Accounts } from "meteor/accounts-base";

Meteor.methods({


    "crearInstructor"(nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor, idUsuario,visualizarAsilo,visualizarCasasDeDia,visualizarClubes,visualizarServicios,visualizarActividades,visualizarTarjetas,visualizarEmpleados,editarEmpleados,visualizarBeneficios,visualizarTutores,editarTutores,visualizarTalleres,visualizarConvocatorias,visualizarCentros) {
        idUsuario = Accounts.createUser({
            username: apodo,
            password: contrasena,
            profile:{
                role: 'instructor',
                visualizarAdultoMayor: visualizarAdultoMayor,
                editarAdultoMayor: editarAdultoMayor,
                visualizarVoluntario: visualizarVoluntario,
                editarVoluntario: editarVoluntario,
                visualizarInstructor: visualizarInstructor,
                editarInstructor: editarInstructor,
                visualizarAsilo: visualizarAsilo,
                visualizarCasasDeDia: visualizarCasasDeDia,
                visualizarClubes:visualizarClubes,
                visualizarServicios:visualizarServicios,
                visualizarActividades:visualizarActividades,
                visualizarTarjetas:visualizarTarjetas,
                visualizarEmpleados:visualizarEmpleados,
                editarEmpleados:editarEmpleados,
                visualizarBeneficios:visualizarBeneficios,
                visualizarTutores:visualizarTutores,
                editarTutores:editarTutores,
                visualizarTalleres:visualizarTalleres,
                visualizarConvocatorias:visualizarConvocatorias,
                visualizarCentros:visualizarCentros
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
                idUsuario: idUsuario,
                visualizarAsilo: visualizarAsilo,
                visualizarCasasDeDia: visualizarCasasDeDia,
                visualizarClubes:visualizarClubes,
                visualizarServicios:visualizarServicios,
                visualizarActividades:visualizarActividades,
                visualizarTarjetas:visualizarTarjetas,
                visualizarEmpleados:visualizarEmpleados,
                editarEmpleados:editarEmpleados,
                visualizarBeneficios:visualizarBeneficios,
                visualizarTutores:visualizarTutores,
                editarTutores:editarTutores,
                visualizarTalleres:visualizarTalleres,
                visualizarConvocatorias:visualizarConvocatorias,
                visualizarCentros:visualizarCentros
            }
        )
    },

    "editarInstructor"(idInstructor,nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor,idUsuario, visualizarAsilo,visualizarCasasDeDia,visualizarClubes,visualizarServicios,visualizarActividades,visualizarTarjetas,visualizarEmpleados,editarEmpleados,visualizarBeneficios,visualizarTutores,editarTutores,visualizarTalleres,visualizarConvocatorias,visualizarCentros) {
        Meteor.users.update(idUsuario,{
            $set:{
                username: apodo,
                profile:{
                    role: 'instructores',
                    visualizarAdultoMayor: visualizarAdultoMayor,
                    editarAdultoMayor: editarAdultoMayor,
                    visualizarVoluntario: visualizarVoluntario,
                    editarVoluntario: editarVoluntario,
                    visualizarInstructor: visualizarInstructor,
                    editarInstructor: editarInstructor,
                    visualizarAsilo: visualizarAsilo,
                    visualizarCasasDeDia: visualizarCasasDeDia,
                    visualizarClubes:visualizarClubes,
                    visualizarServicios:visualizarServicios,
                    visualizarActividades:visualizarActividades,
                    visualizarTarjetas:visualizarTarjetas,
                    visualizarEmpleados:visualizarEmpleados,
                    editarEmpleados:editarEmpleados,
                    visualizarBeneficios:visualizarBeneficios,
                    visualizarTutores:visualizarTutores,
                    editarTutores:editarTutores,
                    visualizarTalleres:visualizarTalleres,
                    visualizarConvocatorias:visualizarConvocatorias,
                    visualizarCentros:visualizarCentros
                }
                
                
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
                    editarInstructor: editarInstructor,
                    visualizarAsilo: visualizarAsilo,
                    visualizarCasasDeDia: visualizarCasasDeDia,
                    visualizarClubes:visualizarClubes,
                    visualizarServicios:visualizarServicios,
                    visualizarActividades:visualizarActividades,
                    visualizarTarjetas:visualizarTarjetas,
                    visualizarEmpleados:visualizarEmpleados,
                    editarEmpleados:editarEmpleados,
                    visualizarBeneficios:visualizarBeneficios,
                    visualizarTutores:visualizarTutores,
                    editarTutores:editarTutores,
                    visualizarTalleres:visualizarTalleres,
                    visualizarConvocatorias:visualizarConvocatorias,
                    visualizarCentros:visualizarCentros
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










