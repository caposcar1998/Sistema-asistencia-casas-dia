import { Meteor } from 'meteor/meteor';
import { Talleres } from "../talleres/talleres";

Meteor.methods({
        "crearTaller"(nombre, descripcion, instructores, colectivos, cupoLimite, foto, redSocial1, redSocial2, redSocial3) {
            Talleres.insert(
                {
                    nombre: nombre,
                    descripcion: descripcion,
                    instructores: instructores,
                    colectivos: colectivos,
                    cupoLimite: cupoLimite,
                    foto: foto,
                    redSocial1: redSocial1,
                    redSocial2: redSocial2,
                    redSocial3: redSocial3
                }
            )
        },
        "editarTaller"(idTaller, nombre, descripcion, instructores, colectivos, cupoLimite, foto, redSocial1, redSocial2, redSocial3) {
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
                        foto: foto,
                        redSocial1: redSocial1,
                        redSocial2: redSocial2,
                        redSocial3: redSocial3
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