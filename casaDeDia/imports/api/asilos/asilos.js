
import SimpleSchema from "simpl-schema";
import Actividades from "../actividades/actividades";
import Restricciones from "../restricciones/restricciones";
import { AdultosMayores } from "../adultosMayores/adultosMayores";
import { Empleados } from "../empleados/empleados";

import { Meteor } from 'meteor/meteor';

export const Asilos = new Mongo.Collection("asilos");

let EmpleadosCasaDia = new SimpleSchema({
    idReferencia: { type: String },
    nombre: { type: String },
    puesto: { type: String }
})

let AdultosMayoresCasaDia = new SimpleSchema({
    idReferencia: { type: String },
    nombre: { type: String },
    curp: {type: String}
})

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("asilos", function(){
        if(Meteor.user().profile.visualizarAsilo === true){
            return Asilos.find();
        }
    });

}

let Schema = new SimpleSchema({
    nombre: { type: String },
    direccion: { type: String },
    "restricciones.$": { type: Restricciones },
    restricciones: { type: Array, defaultValue: [], optional: true },
    horarioApertura: { type: Date },
    horarioCierre: { type: Date },
    cupoLimite: { type: Number },
    codigoPostal: { type: Number },
    "actividades.$": { type: Actividades },
    actividades: { type: Array, defaultValue: [], optional: true },
    foto: { type: String },
    "adultosMayores.$": { type: AdultosMayores },
    adultosMayores: { type: Array, defaultValue: [], optional: true },
    "empleados.$": { type: EmpleadosCasaDia },
    empleados: { type: Array, defaultValue: [], optional: true },
    "usuarios.$": { type: AdultosMayoresCasaDia },
    usuarios: { type: Array, defaultValue: [], optional: true }
})