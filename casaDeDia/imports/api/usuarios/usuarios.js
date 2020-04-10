
import SimpleSchema from "simpl-schema";

export const Pacientes = new.Mongo.Collection("usuarios");

let Schema = new SimpleSchema({
    nombre: { type: String },
    descripcion: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    puesto: {type: String},
})