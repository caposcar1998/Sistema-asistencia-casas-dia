import { Meteor } from 'meteor/meteor';
import { Empleados } from "../empleados/empleados";
import { CasasDeDia } from '../casasDeDia/casasDeDia';
import { Clubes } from '../clubes/clubes';
import { Asilos } from '../asilos/asilos';
import SimpleSchema from 'simpl-schema';
import CryptoJS from "react-native-crypto-js";

Meteor.methods({

    "crearEmpleado"(nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor, idUsuario,visualizarAsilo,visualizarCasasDeDia,visualizarClubes,visualizarServicios,visualizarActividades,visualizarTarjetas,visualizarEmpleados,editarEmpleados,visualizarBeneficios,visualizarTutores,editarTutores,visualizarTalleres,visualizarConvocatorias,visualizarCentros,visualizarColectivos,generarReportes,visualizarRestricciones,visualizarEstablecimiento,editarEstablecimiento,visualizarServiciosHospital,editarServiciosHospital) {
        // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let ap = CryptoJS.AES.encrypt(apellidos, 'secret key 123').toString();
        //let un = CryptoJS.AES.encrypt(apodo, 'secret key 123').toString();
        let cont = CryptoJS.AES.encrypt(contrasena, 'secret key 123').toString();
        let em = CryptoJS.AES.encrypt(email, 'secret key 123').toString();
        
        
        new SimpleSchema({
            nombre: { type: String },
            apellidos: { type: String },
            apodo: { type: String },
            contrasena: { type: String },
            email: { type: String },
          }).validate({ nombre,apellidos,apodo,contrasena,email});

        idUsuario = Accounts.createUser({
            username: apodo,
            password: contrasena,
            profile:{
                role: 'empleados',
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
                visualizarCentros:visualizarCentros,
                visualizarColectivos:visualizarColectivos,
                generarReportes:generarReportes,
                visualizarRestricciones:visualizarRestricciones,
                visualizarEstablecimiento:visualizarEstablecimiento,
                editarEstablecimiento:editarEstablecimiento,
                visualizarServiciosHospital:visualizarServiciosHospital,
                editarServiciosHospital:editarServiciosHospital
            }
        }),
        
        Empleados.insert(
            {
                nombre: nom,
                apellidos: ap,
                apodo: apodo,
                contrasena: cont,
                email: em,
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
                visualizarCentros:visualizarCentros,
                visualizarColectivos:visualizarColectivos,
                generarReportes:generarReportes,
                visualizarRestricciones:visualizarRestricciones,
                visualizarEstablecimiento:visualizarEstablecimiento,
                editarEstablecimiento:editarEstablecimiento,
                visualizarServiciosHospital:visualizarServiciosHospital,
                editarServiciosHospital:editarServiciosHospital
            }
        )
    },

    "editarEmpleado"(idEmpleado,nombre,apellidos,apodo,contrasena,email,visualizarAdultoMayor,editarAdultoMayor,visualizarVoluntario,editarVoluntario,visualizarInstructor,editarInstructor,idUsuario, visualizarAsilo,visualizarCasasDeDia,visualizarClubes,visualizarServicios,visualizarActividades,visualizarTarjetas,visualizarEmpleados,editarEmpleados,visualizarBeneficios,visualizarTutores,editarTutores,visualizarTalleres,visualizarConvocatorias,visualizarCentros, visualizarColectivos,generarReportes,visualizarRestricciones,visualizarEstablecimiento,editarEstablecimiento,visualizarServiciosHospital,editarServiciosHospital) {
        // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let ap = CryptoJS.AES.encrypt(apellidos, 'secret key 123').toString();
        //let un = CryptoJS.AES.encrypt(apodo, 'secret key 123').toString();
        let cont = CryptoJS.AES.encrypt(contrasena, 'secret key 123').toString();
        let em = CryptoJS.AES.encrypt(email, 'secret key 123').toString();
        
        new SimpleSchema({
            nombre: { type: String },
            apellidos: { type: String },
            apodo: { type: String },
            contrasena: { type: String },
            email: { type: String },
          }).validate({ nombre,apellidos,apodo,contrasena,email});

        Meteor.users.update(idUsuario,{
            $set:{
                username: apodo,
                profile:{
                    role: 'empleados',
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
                    visualizarCentros:visualizarCentros,
                    visualizarColectivos:visualizarColectivos,
                    generarReportes:generarReportes,
                    visualizarRestricciones:visualizarRestricciones,
                    visualizarEstablecimiento:visualizarEstablecimiento,
                    editarEstablecimiento:editarEstablecimiento,
                    visualizarServiciosHospital:visualizarServiciosHospital,
                    editarServiciosHospital:editarServiciosHospital
                }
                
                
            }
        });

        if(contrasena != 'the same'){
            Accounts.setPassword(idUsuario, contrasena)
        }
        
        Empleados.update(
            { _id: idEmpleado },
            {
                $set:
                {
                    nombre: nom,
                    apellidos: ap,
                    apodo: apodo,
                    contrasena: cont,
                    email: em,
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
                    visualizarCentros:visualizarCentros,
                    visualizarColectivos:visualizarColectivos,
                    generarReportes:generarReportes,
                    visualizarRestricciones:visualizarRestricciones,
                    visualizarEstablecimiento:visualizarEstablecimiento,
                    editarEstablecimiento:editarEstablecimiento,
                    visualizarServiciosHospital:visualizarServiciosHospital,
                    editarServiciosHospital:editarServiciosHospital
                }
            }
        )
    },

    "borrarEmpleado"(idEmpleado,idUsuario) {
        Meteor.users.remove(idUsuario);

        Empleados.remove(
            {
                "_id": idEmpleado
            }
        )

        //Hacer esto para coleccion que usa empleados
        CasasDeDia.update
            (
                { "empleados": { $elemMatch: { "idReferencia": idEmpleado } } },
                { $pull: { "empleados": { "idReferencia": idEmpleado } } },
                false,
                true
            )


        Clubes.update
            (
                { "empleados": { $elemMatch: { "idReferencia": idEmpleado } } },
                { $pull: { "empleados": { "idReferencia": idEmpleado } } },
                false,
                true
            )

        Asilos.update

            (
                { "empleados": { $elemMatch: { "idReferencia": idEmpleado } } },
                { $pull: { "empleados": { "idReferencia": idEmpleado } } },
                false,
                true
            )
    },

    "leerEmpleado"() {
        return Empleados.find().fetch();
    }


});










