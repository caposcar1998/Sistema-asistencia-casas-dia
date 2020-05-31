import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Actividades = new Mongo.Collection("actividades");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("actividades", function(){
        return Actividades.find();
    });

}

let Schema = new SimpleSchema({
    nombre: { type: String },
    fechaInicio: { type: Date },
    fechaFinal: { type: Date },
    hora: {type: String},
    descripcion: { type: String },
    direccion: { type: String },
})