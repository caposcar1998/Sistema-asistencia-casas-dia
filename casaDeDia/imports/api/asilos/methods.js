import { Meteor } from 'meteor/meteor';
import { Asilos } from "../asilos/asilos";

Meteor.methods({


    "crearAsilo"(nombre, direccion, actividades, restricciones, horarioApertura, horarioCierre, cupoLimite, codigoPostal ,foto) {
        Asilos.insert(
            {
                nombre: nombre,
                direccion: direccion,
                actividades: actividades,
                restricciones: restricciones,
                horarioApertura: horarioApertura,
                horarioCierre: horarioCierre,
                cupoLimite: cupoLimite,
                codigoPostal: codigoPostal,
                foto: foto
            }

        )
    },

    "editarAsilo"(idAsilos, nombre, direccion, actividades, restricciones, horario, horarioAtencion, cupoLimite, codigoPostal ,foto) {
        Asilos.update(
            { _id: idAsilos },
            {
                $set:
                {
                    nombre: nombre,
                    direccion: direccion,
                    actividades: actividades,
                    restricciones: restricciones,
                    horario: horario,
                    horarioAtencion: horarioAtencion,
                    cupoLimite: cupoLimite,
                    codigoPostal: codigoPostal,
                    foto: foto
                }
            }
        )
    },

    "borrarAsilo"(idAsilos) {
        Asilos.remove(
            {
                "_id": idAsilos
            }
        )
    },

    "leerAsilo"() {
        return Asilos.find().fetch();
    }


});










