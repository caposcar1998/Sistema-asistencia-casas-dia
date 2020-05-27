import { Meteor } from 'meteor/meteor';
import "./register-api";
import { Usuarios } from '../imports/api/usuarios/usuarios';
import { Accounts } from "meteor/accounts-base";
Meteor.startup(() => {
 

    //Querry para crear el admin
    if(Meteor.users.find().count() === 0){
        Accounts.createUser({
            username: 'admin',
            password: 'admin',
            profile:{
                role: 'voluntarios',
                visualizarAdultoMayor: true,
                editarAdultoMayor: true,
                visualizarVoluntario: true,
                editarVoluntario: true,
                visualizarInstructor: true,
                editarInstructor: true
            }
        });
    }
   
    /*Usuarios.insert({
        nombre: "admin",
        usuario: "admin",
        contrasena: "admin",
        correo: "admin@admin.com",
        permisos: "todos"
    })*/


});
