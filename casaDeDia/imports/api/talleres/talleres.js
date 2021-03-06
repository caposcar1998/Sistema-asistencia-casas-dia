import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';
import Instructores from "../instructores/instructores";
import Colectivos from "../colectivos/colectivos";

export const Talleres = new Mongo.Collection("talleres");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("talleres", function(){
        if(Meteor.user().profile.visualizarTalleres === true){
            return Talleres.find();
        }
    });
}

let Schema = new SimpleSchema({
    nombre: { type: String },
    descripcion: { type: String },
    "instructores.$": { type: Instructores },
    instructores: { type: Array, defaultValue: [], optional: true },
    "colectivos.$": { type: Colectivos },
    colectivos: { type: Array, defaultValue: [], optional: true },
    cupoLimite: { type: Number },
    foto: { type: String },
    redSocial1: {type: String},
    redSocial2: {type: String},
    redSocial3: {type: String}

    
})