import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Clubes = new Mongo.Collection("clubes");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("clubes", function(){
        return Clubes.find();
    });
}

let Schema = new SimpleSchema({
    nombre: { type: String },
    direccion: { type: String },
    actividades: { type: String },
    restricciones: { type: String },
    horario: { type: Date },
    horarioAtencion: { type: Date },
    cupoLimite: { type: Number }
})

