import { Meteor } from 'meteor/meteor';
import { Clubes } from "../clubes/clubes";

Meteor.methods({


    "crearClub"(nombre, direccion, actividades, restricciones, horario, horarioAtencion, cupoLimite) {
        Clubes.insert(
            {
                nombre: nombre,
                direccion: direccion,
                actividades: actividades,
                restricciones: restricciones,
                horario: horario,
                horarioAtencion: horarioAtencion,
                cupoLimite: cupoLimite
            }

        )
    },

    "editarClub"(idClub, nombre, direccion, actividades, restricciones, horario, horarioAtencion, cupoLimite) {
        Clubes.update(
            { _id: idClub },
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

    "borrarClub"(idClub) {
        Clubes.remove(
            {
                "_id": idClub
            }
        )
    },

    "leerClub"() {
        return Clubes.find().fetch();
    }


});


