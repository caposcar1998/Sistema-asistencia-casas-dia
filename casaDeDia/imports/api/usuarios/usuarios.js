
import SimpleSchema from "simpl-schema";

export const Usuarios = new Mongo.Collection("usuarios");

let Schema = new SimpleSchema({
    nombre: { type: String },
    usuario: {type: String},
    contrasena: { type: String },
    correo: { type: String },
    permisos: { type: String }
})


