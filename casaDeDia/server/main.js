import { Meteor } from 'meteor/meteor';
import "./register-api";
import { Usuarios } from '../imports/api/usuarios/usuarios';
Meteor.startup(() => {
 

    //Querry para crear el admin

    Usuarios.insert({
        nombre: "admin",
        ususario: "admin",
        contrasena: "admin",
        correo: "admin@admin.com",
        permisos: "todos"
    })


});
