import SimpleSchema from "simpl-schema";

export const Voluntarios = new Mongo.Collection("voluntarios");

let Schema = new SimpleSchema({
    nombre: { type: String },
    apellidos: { type: String },
    apodo: { type: String },
    contrasena: {type: String},
    email: { type: String }
})