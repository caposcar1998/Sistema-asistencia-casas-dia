
import SimpleSchema from "simpl-schema";
import Actividades from "../actividades/actividades";
import Restricciones from "../restricciones/restricciones";

import { Meteor } from 'meteor/meteor';

export const CasasDeDia = new Mongo.Collection("casasDeDia");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("casasDeDia", function(){
        return CasasDeDia.find();
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
    foto: {type: String}
})





