import { Meteor } from 'meteor/meteor';
import { Actividades } from '../actividades/actividades';
import { CasasDeDia } from "../casasDeDia/casasDeDia";
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
        //Hacer esto en cada lugar que se usen las actividades
        const eliminarDeCasasDeDia = CasasDeDia.find
            (
                { "actividades": { $elemMatch: { "_id": Actividad } } }
        ).fetch()
        
        //Borrar actividad de activiades, Actividades es el _id se necesita cambiar
        Actividades.remove(
            {
                "_id": Actividad
            }
        ),
        CasasDeDia.update
            (
                { "actividades": { $elemMatch: { "_id": Actividad } } },
                { $pull: { "actividades": { "_id": Actividad } }},
                false,
                true
            )



    },

    "leerActividad"() {
        return Actividades.find().fetch();
    }


});

