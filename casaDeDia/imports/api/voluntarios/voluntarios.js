import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';
import { Empleados } from "../empleados/empleados";
import { Instructores } from "../instructores/instructores";

export const Voluntarios = new Mongo.Collection("voluntarios");


if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("voluntarios", function(){
        //const user = getUser();
        if(Meteor.user().profile.visualizarVoluntario === true){
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
    visualizarCentros:{type:String},
    visualizarColectivos:{type:String},
    generarReportes:{type:String},
    visualizarRestricciones:{type:String},
    visualizarEstablecimiento:{type:String},
    editarEstablecimiento:{type:String},
    visualizarServiciosHospital:{type:String},
    editarServiciosHospital:{type:String}
})