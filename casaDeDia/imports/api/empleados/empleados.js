import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Empleados = new Mongo.Collection("empleados");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("empleados", function(){
        return Empleados.find();
    });
}

let Schema = new SimpleSchema({
    nombre: { type: String },
    apellidos: { type: String },
    apodo: { type: String },
    contrasena: {type: String},
    email: { type: String },
    visualizarAdultoMayor: { type: String },
    editarAdultoMayor: { type: String },
    visualizarVoluntario: { type: String },
    editarVoluntario: { type: String },
    visualizarInstructor: { type: String },
    editarInstructor: { type: String },
    idUsuario: { type: String }
})