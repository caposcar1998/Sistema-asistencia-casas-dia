import { Meteor } from 'meteor/meteor';
import { Tarjetas } from "../tarjetas/tarjetas";

Meteor.methods({


    "crearTarjeta"(beneficiado,numeroTarjeta,fechaVigencia,tipo) {
        Tarjetas.insert(
            {
                beneficiado: beneficiado,
                numeroTarjeta: numeroTarjeta,
                fechaVigencia: fechaVigencia,
                tipo: tipo
            }

        )
    },

    "editarTarjeta"(idTarjeta, beneficiado, numeroTarjeta, fechaVigencia, tipo) {
        Tarjetas.update(
            { _id: idTarjeta },
            {
                $set:
                {
                    beneficiado: beneficiado,
                    numeroTarjeta: numeroTarjeta,
                    fechaVigencia: fechaVigencia,
                    tipo: tipo
                }
            }
        )
    },

    "borrarTarjeta"(idTarjeta) {
        Tarjetas.remove(
            {
                "_id": idTarjeta
            }
        )
    },

    "leerTarjeta"() {
        return Tarjetas.find().fetch();
    }


});
