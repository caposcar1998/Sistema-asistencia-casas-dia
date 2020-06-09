import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const ServiciosHospital = new Mongo.Collection("serviciosHospital");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("serviciosHospital", function(){
        return ServiciosHospital.find();
    });

}

let Schema = new SimpleSchema({
    nombre: { type: String },
    vigencia: { type: Date },
    descripcion: { type: String },
    laboratorio: { type: String }
})