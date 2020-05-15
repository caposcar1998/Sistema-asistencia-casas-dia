import { Meteor } from 'meteor/meteor';
import { Actividades } from '../actividades/actividades';

Meteor.methods({


    "crearActividad"(nombre, fechaInicio, fechaFinal, hora, descripcion, direccion) {
        Actividades.insert(
            {
                nombre: nombre,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
                hora: hora,
                descripcion: descripcion,
                direccion: direccion
            }

        )
    },

    "editarActividad"(idActividad, nombre, fechaInicio, fechaFinal, hora, descripcion, direccion) {
        Actividades.update(
            { _id: idActividad},
            {
                $set:
                {
                    nombre: nombre,
                    fechaInicio: fechaInicio,
                    fechaFinal: fechaFinal,
                    hora: hora,
                    descripcion: descripcion,
                    direccion: direccion
                }
            }
        )
    },

    "borrarActividad"(Actividad) {
        Actividades.remove(
            {
                "_id": Actividad
            }
        )
    },

    "leerActividad"() {
        return Actividades.find().fetch();
    }


});

