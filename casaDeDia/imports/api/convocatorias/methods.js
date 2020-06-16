import { Meteor } from 'meteor/meteor';
import { Convocatorias } from "../convocatorias/convocatorias";

Meteor.methods({
    "crearConvocatoria"(nombre,descripcion, fechaLanzamiento, fechaFinalizacion) {
        Convocatorias.insert(
            {
                nombre: nombre,
                descripcion: descripcion,
                fechaLanzamiento: fechaLanzamiento,
                fechaFinalizacion: fechaFinalizacion,
            }
        ) 
     },

    "editarConvocatoria"(idConvocatoria, nombre,descripcion, fechaLanzamiento, fechaFinalizacion) {
        Convocatorias.update(
            { _id: idConvocatoria},
            {
                $set:
                {
                    nombre: nombre,
                    descripcion:descripcion,
                    fechaLanzamiento: fechaLanzamiento,
                    fechaFinalizacion: fechaFinalizacion,
                }
            }
        )
    },

    "borrarConvocatoria"(idConvocatoria) {
        Convocatorias.remove(
            {
                "_id": idConvocatoria
            }
        )
    },

    "leerConvocatoria"() {
            return Convocatorias.find().fetch();
    }
});
