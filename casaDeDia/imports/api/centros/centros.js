import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Centros = new Mongo.Collection("centros");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("centros", function(){
        if(Meteor.user().profile.visualizarCentros === true){
            return Centros.find();
        }
    });
}

let Schema = new SimpleSchema({
    nombre: { type: String },
    calle: { type: String },
    delegacion: { type: String },
    codigoPostal: { type: String },
    numeroTelefonico: { type: String },
    foto: { type: String }
})