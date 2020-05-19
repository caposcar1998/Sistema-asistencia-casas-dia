import { Meteor } from 'meteor/meteor';
import { CasasDeDia } from "../casasDeDia/casasDeDia";

Meteor.methods({


    "crearCasaDeDia"(nombre, direccion, actividades, restricciones, horarioApertura, horarioCierre, cupoLimite) {
        CasasDeDia.insert(
            {
                nombre: nombre,
                direccion: direccion,
                actividades: actividades,
                restricciones: restricciones,
                horarioApertura: horarioApertura,
                horarioCierre: horarioCierre,
                cupoLimite: cupoLimite
            }

        )
    },

    "editarCasaDeDia"(idCasaDeDia, nombre, direccion, actividades, restricciones, horario, horarioAtencion, cupoLimite) {
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
                    cupoLimite: cupoLimite
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



