import SimpleSchema from "simpl-schema";

export const Restricciones = new Mongo.Collection("restricciones");

let Schema = new SimpleSchema({
    nombre: { type: String },
    tipo: {type: String}
})