import { Meteor } from 'meteor/meteor';
import { Promociones } from "../promociones/promociones";

Meteor.methods({


    "crearPromocion"(nombre,fechaInicio,fechaFinal,descripcion,direccion,telefono,acumulable,restricciones) {
        Promociones.insert(
            {
                nombre: nombre,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
                descripcion: descripcion,
                direccion: direccion,
                telefono: telefono,
                acumulable: acumulable,
                restricciones: restricciones
            }

        )
    },

    "editarPromocion"(idPromocion, nombre, fechaInicio, fechaFinal, descripcion, direccion, telefono, acumulable, restricciones) {
        Promociones.update(
            { _id: idPromocion },
            {
                $set:
                {
                    nombre: nombre,
                    fechaInicio: fechaInicio,
                    fechaFinal: fechaFinal,
                    descripcion: descripcion,
                    direccion: direccion,
                    telefono: telefono,
                    acumulable: acumulable,
                    restricciones: restricciones
                }
            }
        )
    },

    "borrarPromocion"(idPromocion) {
        Promociones.remove(
            {
                "_id": idPromocion
            }
        )
    },

    "leerPromocion"() {
        return Promociones.find().fetch();
    }


});

