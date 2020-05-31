import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Colectivos = new Mongo.Collection("colectivos");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("colectivos", function(){
        if(Meteor.user().profile.visualizarColectivos === true){
            return Colectivos.find();
        }
    });
}

let Schema = new SimpleSchema({
    idTutor : {type: String},
    nombre: { type: String },
    descripcion: { type: String },
    categoria: { type:  String}
})