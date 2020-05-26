import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Voluntarios = new Mongo.Collection("voluntarios");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("voluntarios", function(){
        return Voluntarios.find();
    });
}

let Schema = new SimpleSchema({
    nombre: { type: String },
    apellidos: { type: String },
    apodo: { type: String },
    contrasena: {type: String},
    email: { type: String },
    visualizarAdultoMayor: { type: Boolean },
    editarAdultoMayor: { type: Boolean },
    visualizarVoluntario: { type: Boolean },
    editarVoluntario: { type: Boolean },
    visualizarInstructor: { type: Boolean },
    editarInstructor: { type: Boolean },
    idUsuario: { type: String }
})