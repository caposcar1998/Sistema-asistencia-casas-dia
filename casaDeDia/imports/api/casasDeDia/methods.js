import { Meteor } from 'meteor/meteor';
import { CasasDeDia } from "../casasDeDia/casasDeDia";

Meteor.methods({


    "crearCasaDeDia"(nombre, direccion, actividades, restricciones, horarioApertura, horarioCierre, cupoLimite, codigoPostal ,foto) {
        CasasDeDia.insert(
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

    "editarCasaDeDia"(idCasaDeDia, nombre, direccion, actividades, restricciones, horario, horarioAtencion, cupoLimite, codigoPostal ,foto) {
        CasasDeDia.update(
            { _id: idCasaDeDia },
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

    "borrarCasaDeDia"(idCasaDeDia) {
        CasasDeDia.remove(
            {
                "_id": idCasaDeDia
            }
        )
    },

    "leerCasasDeDia"() {
        return CasasDeDia.find().fetch();
    }


});



