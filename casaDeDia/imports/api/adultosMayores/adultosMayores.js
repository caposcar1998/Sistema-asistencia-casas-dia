import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const AdultosMayores = new Mongo.Collection("adultosMayores");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("adultosMayores", function(){
        if(Meteor.user().profile.visualizarAdultoMayor === true){
            return AdultosMayores.find();
        }
    });

}

let Schema = new SimpleSchema({
    nombre: { type: String },
    apellidos: { type: String },
    curp: { type: String },
    sexo: {type: String},
    edad: { type: Number },
    grupoSanguineo: { type: String },
    direccion: { type: String },
    codigoPostal:{ type: String }
})