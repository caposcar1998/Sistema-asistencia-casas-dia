import { Meteor } from 'meteor/meteor';
import "./register-api";
import { Usuarios } from '../imports/api/usuarios/usuarios';
import { Accounts } from "meteor/accounts-base";
Meteor.startup(() => {
 

    //Querry para crear el admin
    if(Meteor.users.find().count() === 0 || !(Meteor.users.findOne({username:"administradorGeneral"}))){
        Accounts.createUser({
            username: 'administradorGeneral',
            password: 'administradorGeneral',
            profile:{
                role: 'voluntarios',
                visualizarAdultoMayor: true,
                editarAdultoMayor: true,
                visualizarVoluntario: true,
                editarVoluntario: true,
                visualizarInstructor: true,
                editarInstructor: true,
                visualizarAsilo: true,
                visualizarCasasDeDia: true,
                visualizarClubes:true,
                visualizarServicios:true,
                visualizarActividades:true,
                visualizarTarjetas:true,
                visualizarEmpleados:true,
                editarEmpleados:true,
                visualizarBeneficios:true,
                visualizarTutores:true,
                editarTutores:true,
                visualizarTalleres:true,
                visualizarConvocatorias:true,
                visualizarCentros:true,
                visualizarColectivos:true,
                generarReportes:true,
                visualizarRestricciones:true,
            }
        });
    }

    /*Accounts.createUser({
        username: 'moni',
        password: 'hola',
        profile:{
            role: 'voluntarios',
            visualizarAdultoMayor: true,
                editarAdultoMayor: true,
                visualizarVoluntario: true,
                editarVoluntario: true,
                visualizarInstructor: true,
                editarInstructor: true,
                visualizarAsilo: true,
                visualizarCasasDeDia: true,
                visualizarClubes:true,
                visualizarServicios:true,
                visualizarActividades:true,
                visualizarTarjetas:true,
                visualizarEmpleados:true,
                editarEmpleados:true,
                visualizarBeneficios:true,
                visualizarTutores:true,
                editarTutores:true,
                visualizarTalleres:true,
                visualizarConvocatorias:true,
                visualizarCentros:true,
                visualizarColectivos:true,
                generarReportes:true,
                visualizarRestricciones:true,
        }
    });*/


});
