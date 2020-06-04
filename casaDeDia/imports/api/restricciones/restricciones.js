import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Restricciones = new Mongo.Collection("restricciones");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("restricciones", function(){
        return Restricciones.find();
    });
}

let Schema = new SimpleSchema({
    nombre: { type: String },
    descripcion: {type: String}
})