import SimpleSchema from "simpl-schema";

export const Empleados = new Mongo.Collection("empleados");

let Schema = new SimpleSchema({
    nombre: { type: String },
    apellidos: { type: String },
    apodo: { type: String },
    contrasena: {type: String},
    email: { type: String },
    visualizarAdultoMayor: { type: String },
    editarAdultoMayor: { type: String },
    visualizarVoluntario: { type: String },
    editarVoluntario: { type: String },
    visualizarInstructor: { type: String },
    editarInstructor: { type: String },
    idUsuario: { type: String }
})