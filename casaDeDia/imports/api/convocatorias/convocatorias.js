import SimpleSchema from "simpl-schema";
export const Convocatorias = new Mongo.Collection("convocatorias");

let Schema = new SimpleSchema({
    nombre: { type: String },
    fechaLanzamiento: { type: Date },
    fechaFinalizacion: { type: Date },
})