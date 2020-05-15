
import SimpleSchema from "simpl-schema";
import Actividades from "../actividades/actividades";
import Restricciones from "../restricciones/restricciones";

export const CasasDeDia = new Mongo.Collection("casasDeDia");

let Schema = new SimpleSchema({
    nombre: { type: String },
    direccion: { type: String },
    "restricciones.$": { type: Restricciones },
    restricciones: { type: Array, defaultValue: [], optional: true },
    horario: { type: Date },
    horarioAtencion: { type: Date },
    cupoLimite: { type: Number },
    "actividades.$": { type: Actividades },
    actividades: { type: Array, defaultValue: [], optional: true }
})





