import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Servicios = new Mongo.Collection("servicios");

if (Meteor.isServer) {
    // This code only runs on the server	
    // Only publish tasks that are public or belong to the current user	
    Meteor.publish("servicios", function () {
        if (Meteor.user().profile.visualizarServicios === true) {
            return Servicios.find();
        }
    });

}

let Schema = new SimpleSchema({
    tipoServicio: { type: String },
    nombre: { type: String },
    telefono: { type: String },
    direccion: { type: String },
    vigente: { type: String },
    redSocial1: { type: String },
    redSocial2: { type: String },
    redSocial3: { type: String },
    fechaRegistro: { type: Date }
}) 