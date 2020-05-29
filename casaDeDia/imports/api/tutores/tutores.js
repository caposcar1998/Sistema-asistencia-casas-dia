import SimpleSchema from "simpl-schema";
import { Meteor } from 'meteor/meteor';

export const Tutores = new Mongo.Collection("tutores");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("tutores", function(){
        if(Meteor.user().profile.visualizarTutores === true){
            return Tutores.find();
        }
    });

    
}


let Schema = new SimpleSchema({
    nombre: { type: String },
    apellido: { type: String },
    fechaNacimiento: { type: Date },
    direccion: { type: String },
    telefono: { type: String },
    telefonoInteligente: { type: Boolean },
    curp: {type: String}
})