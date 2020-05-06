
import SimpleSchema from "simpl-schema";

export const CasasDeDia = new Mongo.Collection("casasDeDia");

let Schema = new SimpleSchema({
    nombre: { type: String },
    direccion: { type: String },
    actividades: { type: String },
    restricciones: { type: String },
    horario: { type: Date },
    horarioAtencion: { type: Date },
    cupoLimite: { type: Number }
})





