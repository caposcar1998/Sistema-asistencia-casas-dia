import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';
import { Checkbox } from "@material-ui/core";

export const Establecimientos = new Mongo.Collection("establecimientos");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("establecimientos", function(){
        return Establecimientos.find();
    });

}

let Schema = new SimpleSchema({
    nombre: { type: String },
    descripcion: { type: String },
    direccion: { type: String }
})