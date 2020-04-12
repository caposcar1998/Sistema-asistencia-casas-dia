
import SimpleSchema from "simpl-schema";

export const Pacientes = new Mongo.Collection("promociones");

let Schema = new SimpleSchema({
    nombre: { type: String },
    fechaInicio: { type: Date },
    fechaFinal: { type: Date },
    descripcion: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    acumulable: {type, Boolean, defaultValue: false, optional: true}
})