import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';
import { Empleados } from "../empleados/empleados";
import { Instructores } from "../instructores/instructores";

export const Voluntarios = new Mongo.Collection("voluntarios");

function getUser(){
    const collection = Meteor.user().profile.role;
    const entro = Meteor.userId();
    if(collection == 'empleados'){
        return (Empleados.find({idUsuario:entro}).fetch())[0];
    }else if(collection == 'instructores'){
        return (Instructores.find({idUsuario:entro}).fetch())[0];
    }else if(collection == 'voluntarios'){
        return (Voluntarios.find({idUsuario:entro}).fetch())[0];
    }
}

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("voluntarios", function(){
        const user = getUser();
        if(user.visualizarVoluntario == true){
            return Voluntarios.find();
        }
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