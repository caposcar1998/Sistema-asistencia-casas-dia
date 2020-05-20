import { Meteor } from 'meteor/meteor';
import { Usuarios } from "../usuarios/usuarios";
//import { Accounts } from "meteor/accounts-base";

Meteor.methods({

    "encontrarAdministrador"(usuario, contrasena) {
        const administrador = Usuarios.findOne({
            usuario: usuario,
            contrasena: contrasena
        })
        
        //console.log(administrador)
        if (administrador.usuario == null) { 
            throw new Meteor.Error(administrador);
        }

        /*Meteor.loginWithPassword(username, password, function(err){
            if(err){
                console.log(reason);
                throw new Meteor.Error(administrador);
            }
        })*/
    }


})