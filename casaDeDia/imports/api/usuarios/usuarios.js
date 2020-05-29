
import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Usuarios = new Mongo.Collection("usuarios");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("usuarios", function(){
        return Usuarios.find();
    });

}

let Schema = new SimpleSchema({
    nombre: { type: String },
    usuario: {type: String},
    contrasena: { type: String },
    correo: { type: String },
    permisos: { type: String }
})


