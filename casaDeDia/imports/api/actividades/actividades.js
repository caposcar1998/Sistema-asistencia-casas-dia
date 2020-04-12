import SimpleSchema from "simpl-schema";

export const Pacientes = new Mongo.Collection("actividades");

let Schema = new SimpleSchema({
    nombre: { type: String },
    fechaInicio: { type: Date },
    fechaFinal: { type: Date },
    hora: {type: String},
    descripcion: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    foto: { type: binData},
    restricciones: { type: Array, defaultValue: [] }
})