import { Meteor } from 'meteor/meteor';
import { Talleres } from "../talleres/talleres";

Meteor.methods({
        "crearTaller"(nombre, descripcion, instructores, colectivos, cupoLimite, foto) {
            Talleres.insert(
                {
                    nombre: nombre,
                    descripcion: descripcion,
                    instructores: instructores,
                    colectivos: colectivos,
                    cupoLimite: cupoLimite,
                    foto: foto
                }
            )
        },
        "editarTaller"(idTaller, nombre, descripcion, instructores, colectivos, cupoLimite, foto) {
            Talleres.update(
                { _id: idTaller},
                {
                    $set:
                    {
                        nombre: nombre,
                        descripcion: descripcion,
                        instructores: instructores,
                        colectivos: colectivos,
                        cupoLimite: cupoLimite,
                        foto: foto
                    }
                }
            )
        },
        "borrarTaller"(idTaller) {
            Talleres.remove(
                {
                    "_id": idTaller
                }
            )
        },
        "leerTalleres"() {
            return Talleres.find().fetch();
        }
});