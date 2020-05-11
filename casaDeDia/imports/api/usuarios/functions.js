import { Meteor } from 'meteor/meteor';
import { Usuarios } from "../usuarios/usuarios";

Meteor.methods({

    "encontrarAdministrador"(usuario, contrasena) {

        const administrador = Usuarios.findOne({
            usuario: usuario,
            contrasena: contrasena
        })
        console.log(administrador)
        if (administrador.usuario == null) { 
            throw new Meteor.Error(administrador);
        }
    
    }


})