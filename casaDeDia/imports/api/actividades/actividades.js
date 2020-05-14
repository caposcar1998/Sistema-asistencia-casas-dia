import SimpleSchema from "simpl-schema";

export const Actividades = new Mongo.Collection("actividades");

let Schema = new SimpleSchema({
    nombre: { type: String },
    fechaInicio: { type: Date },
    fechaFinal: { type: Date },
    hora: {type: String},
    descripcion: { type: String },
    direccion: { type: String },
})