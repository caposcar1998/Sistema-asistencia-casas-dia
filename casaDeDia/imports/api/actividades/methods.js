import { Meteor } from 'meteor/meteor';
import { Actividades } from '../actividades/actividades';
import { CasasDeDia } from "../casasDeDia/casasDeDia";
import { Clubes } from "../clubes/clubes";
import { Asilos } from "../asilos/asilos";

Meteor.methods({


    "crearActividad"(nombre, fechaInicio, fechaFinal, hora, descripcion, direccion, codigoPostal) {
        Actividades.insert(
            {
                nombre: nombre,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
                hora: hora,
                descripcion: descripcion,
                direccion: direccion,
                codigoPostal: codigoPostal
            }

        )
    },

    "editarActividad"(idActividad, nombre, fechaInicio, fechaFinal, hora, descripcion, direccion, codigoPostal) {
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
                    direccion: direccion,
                    codigoPostal: codigoPostal
                }
            }
        )
    },

    "borrarActividad"(Actividad) {
        //Borrar actividad de activiades, Actividades es el _id se necesita cambiar
        Actividades.remove(
            {
                "_id": Actividad
            }
        ),
        //Hacer esto para coleccion que usa actividades
        CasasDeDia.update
            (
                { "actividades": { $elemMatch: { "_id": Actividad } } },
                { $pull: { "actividades": { "_id": Actividad } }},
                false,
                true
            )
        Asilos.update
            (
                { "actividades": { $elemMatch: { "_id": Actividad } } },
                { $pull: { "actividades": { "_id": Actividad } }},
                false,
                true 
            )

        Clubes.update
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

