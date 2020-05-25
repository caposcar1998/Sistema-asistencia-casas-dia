
import SimpleSchema from "simpl-schema";
import Actividades from "../actividades/actividades";
import Restricciones from "../restricciones/restricciones";
import { AdultosMayores } from "../adultosMayores/adultosMayores";
import { Empleados } from "../empleados/empleados";

export const CasasDeDia = new Mongo.Collection("casasDeDia");

let Schema = new SimpleSchema({
    nombre: { type: String },
    direccion: { type: String },
    "restricciones.$": { type: Restricciones },
    restricciones: { type: Array, defaultValue: [], optional: true },
    horarioApertura: { type: Date },
    horarioCierre: { type: Date },
    cupoLimite: { type: Number },
    codigoPostal: { type: Number },
    "actividades.$": { type: Actividades },
    actividades: { type: Array, defaultValue: [], optional: true },
    foto: { type: String },
    "adultosMayores.$": { type: AdultosMayores },
    adultosMayores: { type: Array, defaultValue: [], optional: true },
    "empleados.$": { type: Empleados },
    empleados: { type: Array, defaultValue: [], optional: true }
})





