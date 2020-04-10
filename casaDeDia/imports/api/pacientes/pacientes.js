import SimpleSchema from "simpl-schema";

export const Pacientes = new.Mongo.Collection("pacientes");

let Schema = new SimpleSchema({
    nombre: { type: String },
    apellido: { type: String },
    fechaNacimiento: { type: Date },
    direccion: { type: String },
    telefono: { type: String },
    telefonoInteligente: { type: Boolean }
})