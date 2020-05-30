
import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Tarjetas = new Mongo.Collection("tarjetas");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("tarjetas", function(){
        if(Meteor.user().profile.visualizarTarjetas === true){
            return Tarjetas.find();
        }
    });

}

let Schema = new SimpleSchema({
    beneficiado: { type: String },
    numeroTarjeta: { type: String },
    fechaVigencia: { type: Date },
    tipo: { type: String }
    
})


