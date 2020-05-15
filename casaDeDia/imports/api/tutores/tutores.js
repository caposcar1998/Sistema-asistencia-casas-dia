import SimpleSchema from "simpl-schema";
export const Tutores = new Mongo.Collection("tutores");

let Schema = new SimpleSchema({
    nombre: { type: String },
    apellido: { type: String },
    fechaNacimiento: { type: Date },
    direccion: { type: String },
    telefono: { type: String },
    telefonoInteligente: { type: Boolean },
    curp: {type: String}
})