import SimpleSchema from "simpl-schema";
import Tutores from "../tutores/tutores";
import { Meteor } from 'meteor/meteor';
export const Colectivos = new Mongo.Collection("colectivos");

if (Meteor.isServer) {
    Meteor.publish("colectivos", function(){
        if(Meteor.user().profile.visualizarColectivos === true){
            return Colectivos.find();
        }
    });
}

let Schema = new SimpleSchema({
    nombre: { type: String },
    descripcion: { type: String },
    "tutores.$": { type: Tutores },
    tutores: { type: Array, defaultValue: [], optional: true },
    categoria: { type: String },
    cupoLimite: { type: Number },
    foto: { type: String },
})

