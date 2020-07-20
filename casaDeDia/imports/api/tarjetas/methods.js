import { Meteor } from 'meteor/meteor';
import { Tarjetas } from "../tarjetas/tarjetas";
import { AdultosMayores } from '../adultosMayores/adultosMayores';
import CryptoJS from "react-native-crypto-js";

Meteor.methods({




    "crearSalud"(nombre, fechaVigencia, hospital, servicios) {
        // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let fv = CryptoJS.AES.encrypt(fechaVigencia, 'secret key 123').toString();
        //let hosp = CryptoJS.AES.encrypt(hospital, 'secret key 123').toString();
        //let serv = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();

        Tarjetas.insert(
            {
                tipo: "salud",
                nombre: nombre,
                fechaVigencia: fv,
                hospital: hospital,
                servicios: servicios
            }

        )
    },

    "crearDinero"(nombre, fechaVigencia, cantidad, banco, tiempo) {
        // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let fv = CryptoJS.AES.encrypt(fechaVigencia, 'secret key 123').toString();
        let cant = CryptoJS.AES.encrypt(cantidad, 'secret key 123').toString();
        let banc = CryptoJS.AES.encrypt(banco, 'secret key 123').toString();
        let tmpo = CryptoJS.AES.encrypt(tiempo, 'secret key 123').toString();
        Tarjetas.insert(
            {
                tipo: "dinero",
                nombre: nom,
                fechaVigencia: fv,
                cantidad: cant,
                banco: banc,
                tiempo: tmpo
            }

        )
    },

    "crearDespensa"(nombre, fechaVigencia, cantidad, lugaresAceptados) {
        // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let fv = CryptoJS.AES.encrypt(fechaVigencia, 'secret key 123').toString();
        let cant = CryptoJS.AES.encrypt(cantidad, 'secret key 123').toString();
        //let la = CryptoJS.AES.encrypt(lugaresAceptados, 'secret key 123').toString();
        
        Tarjetas.insert(
            {
                tipo: "despensa",
                nombre: nom,
                fechaVigencia: fv,
                cantidad: cant,
                lugaresAceptados: lugaresAceptados
            }

        )
    },

    "editarSalud"(idTarjeta, nombre, fechaVigencia, hospital, servicios) {
            // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let fv = CryptoJS.AES.encrypt(fechaVigencia, 'secret key 123').toString();
        let hosp = CryptoJS.AES.encrypt(hospital, 'secret key 123').toString();
            Tarjetas.update(
                { _id: idTarjeta },
                {
                    $set:
                    {
                        nombre: nom,
                        fechaVigencia: fv,
                        hospital: hosp,
                        servicios: servicios
                    }
                }
            )
    },

    "editarDinero"(idTarjeta, nombre, fechaVigencia, cantidad, banco, tiempo,) {
        // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let fv = CryptoJS.AES.encrypt(fechaVigencia, 'secret key 123').toString();
        let cant = CryptoJS.AES.encrypt(cantidad, 'secret key 123').toString();
        let banc = CryptoJS.AES.encrypt(banco, 'secret key 123').toString();
        let tmpo = CryptoJS.AES.encrypt(tiempo, 'secret key 123').toString();
        Tarjetas.update(
            { _id: idTarjeta },
            {
                $set:
                {
                    nombre: nom,
                    fechaVigencia: fv,
                    cantidad: cant,
                    banco: banc,
                    tiempo: tmpo
                }
            })
    },
     

    "editarDespensa"(idTarjeta, nombre, fechaVigencia, cantidad, lugaresAceptados) {
        // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let fv = CryptoJS.AES.encrypt(fechaVigencia, 'secret key 123').toString();
        let cant = CryptoJS.AES.encrypt(cantidad, 'secret key 123').toString();
        //let la = CryptoJS.AES.encrypt(lugaresAceptados, 'secret key 123').toString();
        Tarjetas.update(
            { _id: idTarjeta },
            {
                $set:
                {
                    nombre: nom,
                    fechaVigencia: fv,
                    cantidad: cant,
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

    "leerTarjetas"() {
        return Tarjetas.find().fetch();
    },

    "leerTarjeta"(idTarjeta) {
        let tarjeta = Tarjetas.findOne({ "_id": idTarjeta });
        return tarjeta;
    }


});
