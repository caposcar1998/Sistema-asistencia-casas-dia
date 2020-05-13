import SimpleSchema from "simpl-schema";

export const Servicios = new Mongo.Collection("servicios");

let Schema = new SimpleSchema({
    tipoServicio: { type: String },
    nombre: { type: String },
    telefono: { type: String },
    direccion: {type: String},
    vigente: { type: String },
    redSocial1: { type: String },
    redSocial2: { type: String },
    redSocial3: {type: String},
    fechaRegistro: {type: Date}
})