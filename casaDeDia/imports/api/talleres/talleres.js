import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Talleres = new Mongo.Collection("talleres");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("talleres", function(){
        return Talleres.find();
    });
}

let Schema = new SimpleSchema({
    cupo: { type: Int16Array },
    nombre: { type: String },
    instructor: { type: String},
    colectivo: {type: String},
    
})