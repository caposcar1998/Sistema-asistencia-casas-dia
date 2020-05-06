
import SimpleSchema from "simpl-schema";

export const Tarjetas = new Mongo.Collection("tarjetas");

let Schema = new SimpleSchema({
    beneficiado: { type: String },
    numeroTarjeta: { type: String },
    fechaVigencia: { type: Date },
    tipo: { type: String }
})


