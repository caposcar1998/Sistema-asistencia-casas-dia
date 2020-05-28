import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';
import { Instructores } from "../instructores/instructores";

export const Empleados = new Mongo.Collection("empleados");

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
    Meteor.publish("empleados", function(){
        return Empleados.find();
    });

    /*Meteor.publish("empleados", function(){
        if(Meteor.user().profile.visualizarAdultoMayor === true){
            return Empleados.find();
        }
    });*/
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
    idUsuario: { type: String },
    visualizarAsilo: {type: String},
    visualizarCasasDeDia: {type:String},
    visualizarClubes:{type:String},
    visualizarServicios:{type:String},
    visualizarActividades:{type:String},
    visualizarTarjetas:{type:String},
    visualizarEmpleados:{type:String},
    editarEmpleados:{type:String},
    visualizarBeneficios:{type:String},
    visualizarTutores:{type:String},
    editarTutores:{type:String},
    visualizarTalleres:{type:String},
    visualizarConvocatorias:{type:String},
    visualizarCentros:{type:String}
})