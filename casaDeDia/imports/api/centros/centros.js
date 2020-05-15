import SimpleSchema from "simpl-schema";

export const Centros = new Mongo.Collection("centros");

let Schema = new SimpleSchema({
    calle: { type: String },
    delegacion: { type: String },
    codigoPostal: { type: String },
    numeroTelefonico: { type: String }
})