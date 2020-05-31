import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const TarjetasEfectivo = new Mongo.Collection("tarjetasEfectivo");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("tarjetasEfectivo", function () {
        if (Meteor.user().profile.visualizarTarjetas === true) {
            return TarjetasSalud.find();
        }
    });

}

let Schema = new SimpleSchema({
    nombre: { type: String },
    tiempoDeposito: { type: String },
    cantidad: { type: Number },
    banco: {type: String}
})


//Solo para referencia
