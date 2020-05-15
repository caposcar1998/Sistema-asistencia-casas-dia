import SimpleSchema from "simpl-schema";

export const Talleres = new Mongo.Collection("talleres");

let Schema = new SimpleSchema({
    cupo: { type: Int16Array },
    nombre: { type: String },
    instructor: { type: String},
    colectivo: {type: String},
    
})