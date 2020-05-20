import SimpleSchema from "simpl-schema";

export const Instructores = new Mongo.Collection("instructores");

let Schema = new SimpleSchema({
    nombre: { type: String },
    apellidos: { type: String },
    apodo: { type: String },
    contrasena: {type: String},
    email: { type: String },
    visualizarAdultoMayor: { type: Boolean },
    editarAdultoMayor: { type: Boolean },
    visualizarVoluntario: { type: Boolean },
    editarVoluntario: { type: Boolean },
    visualizarInstructor: { type: Boolean },
    editarInstructor: { type: Boolean }
})