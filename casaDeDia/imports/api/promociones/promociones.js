import { Meteor } from 'meteor/meteor';
import SimpleSchema from "simpl-schema";

export const Promociones = new Mongo.Collection("promociones");

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    /*Meteor.publish("instructores", function(){
        return Instructores.find();
    });*/

    Meteor.publish("promociones", function(){
        if(Meteor.user().profile.visualizarBeneficios === true){
            return Promociones.find();
        }
    });
}

let Schema = new SimpleSchema({
    nombre: { type: String },
    fechaInicio: { type: Date },
    fechaFinal: { type: Date },
    descripcion: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    acumulable: { type: Boolean, defaultValue: false, optional: true },
    restricciones: { type: String },
    caducidad: {type: Boolean}
})