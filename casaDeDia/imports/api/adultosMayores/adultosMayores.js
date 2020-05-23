import SimpleSchema from "simpl-schema";

export const AdultosMayores = new Mongo.Collection("adultosMayores");

let Schema = new SimpleSchema({
    nombre: { type: String },
    apellidos: { type: String },
    curp: { type: String },
    sexo: {type: String},
    edad: { type: Number },
    grupoSanguineo: { type: String },
    direccion: { type: String },
    codigoPostal:{ type: String },
    apodo: {type: String},
    contrasena: {type: String}
})