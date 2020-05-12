import SimpleSchema from "simpl-schema";

export const Clubes = new Mongo.Collection("clubes");

let Schema = new SimpleSchema({
    nombre: { type: String },
    direccion: { type: String },
    actividades: { type: String },
    restricciones: { type: String },
    horario: { type: Date },
    horarioAtencion: { type: Date },
    cupoLimite: { type: Number }
})

