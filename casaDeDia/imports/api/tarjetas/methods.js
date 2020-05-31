import { Meteor } from 'meteor/meteor';
import { Tarjetas } from "../tarjetas/tarjetas";

Meteor.methods({




    "crearSalud"(nombre, fechaVigencia, hospital, servicios) {
        Tarjetas.insert(
            {
                tipo: "salud",
                nombre: nombre,
                fechaVigencia: fechaVigencia,
                hospital: hospital,
                servicios: servicios
            }

        )
    },

    "crearDinero"(nombre, fechaVigencia, cantidad, banco, tiempo) {
        Tarjetas.insert(
            {
                tipo: "dinero",
                nombre: nombre,
                fechaVigencia: fechaVigencia,
                cantidad: cantidad,
                banco: banco,
                tiempo: tiempo
            }

        )
    },

    "crearDespensa"(nombre, fechaVigencia, cantidad, lugaresAceptados) {
        Tarjetas.insert(
            {
                tipo: "despensa",
                nombre: nombre,
                fechaVigencia: fechaVigencia,
                cantidad: cantidad,
                lugaresAceptados: lugaresAceptados
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
