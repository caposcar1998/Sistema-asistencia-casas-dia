
import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Asilos = new Mongo.Collection("asilos");
if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("asilos", function(){
        if(Meteor.user().profile.visualizarAsilo === true){
            return Asilos.find();
        }
    });

}

let Schema = new SimpleSchema({
    nombre: { type: String },
    direccion: { type: Date },
    servicios: { type: Date },
    horarioAtencion: { type: Date },
    precio: { type: Number },
    telefono: { type: Number }
})