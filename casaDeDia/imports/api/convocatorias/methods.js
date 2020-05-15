import { Meteor } from 'meteor/meteor';
import { Convocatorias } from "../convocatorias/convocatorias";

Meteor.methods({
    "crearConvocatoria"(nombre, fechaLanzamiento, fechaFinalizacion) {
        Convocatorias.insert(
            {
                nombre: nombre,
                fechaLanzamiento: fechaLanzamiento,
                fechaFinalizacion: fechaFinalizacion,
            }
        ) 
     },

    "editarConvocatoria"(idConvocatoria, nombre, fechaLanzamiento, fechaFinalizacion) {
        Convocatorias.update(
            { _id: idConvocatoria},
            {
                $set:
                {
                    nombre: nombre,
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