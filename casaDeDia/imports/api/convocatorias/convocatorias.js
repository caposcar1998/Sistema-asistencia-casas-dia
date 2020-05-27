import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Convocatorias = new Mongo.Collection("convocatorias");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("convocatorias", function(){
        return Convocatorias.find();
    });
}

let Schema = new SimpleSchema({
    nombre: { type: String },
    fechaLanzamiento: { type: Date },
    fechaFinalizacion: { type: Date },
})