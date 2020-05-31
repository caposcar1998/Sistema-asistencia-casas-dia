import { Meteor } from 'meteor/meteor';
import { Tarjetas } from "../tarjetas/tarjetas";
import { AdultosMayores } from '../adultosMayores/adultosMayores';

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

    "editarSalud"(idTarjeta, nombre, fechaVigencia, hospital, servicios) {

            Tarjetas.update(
                { _id: idTarjeta },
                {
                    $set:
                    {
                        nombre: nombre,
                        fechaVigencia: fechaVigencia,
                        hospital: hospital,
                        servicios: servicios
                    }
                }
            )
    },

    "editarDinero"(idTarjeta, nombre, fechaVigencia, cantidad, banco, tiempo,) {
        Tarjetas.update(
            { _id: idTarjeta },
            {
                $set:
                {
                    nombre: nombre,
                    fechaVigencia: fechaVigencia,
                    cantidad: cantidad,
                    banco: banco,
                    tiempo: tiempo
                }
            })
    },
     

    "editarDespensa"(idTarjeta, nombre, fechaVigencia, cantidad, lugaresAceptados) {
        Tarjetas.update(
            { _id: idTarjeta },
            {
                $set:
                {
                    nombre: nombre,
                    fechaVigencia: fechaVigencia,
                    cantidad: cantidad,
                    lugaresAceptados: lugaresAceptados
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
        AdultosMayores.update
            (
                { "tarjetas": { $elemMatch: { "idReferencia": idTarjeta } } },
                { $pull: { "tarjetas": { "idReferencia": idTarjeta } } },
                false,
                true
            )
    },

    "leerTarjeta"() {
        return Tarjetas.find().fetch();
    }


});
