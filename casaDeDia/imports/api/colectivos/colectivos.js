import SimpleSchema from "simpl-schema";
export const Colectivos = new Mongo.Collection("colectivos");

let Schema = new SimpleSchema({
    idTutor : {type: String},
    nombre: { type: String },
    descripcion: { type: String },
    categoria: { type:  String}
})