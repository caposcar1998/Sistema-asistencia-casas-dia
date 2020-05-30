import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const TarjetasSalud = new Mongo.Collection("tarjetasSalud");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("tarjetasDespensa", function () {
        if (Meteor.user().profile.visualizarTarjetas === true) {
            return TarjetasSalud.find();
        }
    });

}

let lugaresAceptados = new SimpleSchema({
    nombre: { type: String },
})

let Schema = new SimpleSchema({

    nombre: { type: String },
    fechaVigencia: { type: Date },
    cantidad: { type: Number },
    "lugaresAceptados.$": { type: lugaresAceptados },
    lugaresAceptados: { type: Array, defaultValue: [], optional: true },
})


