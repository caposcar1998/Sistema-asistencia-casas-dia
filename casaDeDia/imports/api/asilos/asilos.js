
import SimpleSchema from "simpl-schema";

export const Asilos = new Mongo.Collection("asilos");

let Schema = new SimpleSchema({
    nombre: { type: String },
    direccion: { type: Date },
    servicios: { type: Date },
    horarioAtencion: { type: Date },
    precio: { type: Number },
    telefono: { type: Number }
})