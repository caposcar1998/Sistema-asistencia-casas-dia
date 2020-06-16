import { Meteor } from 'meteor/meteor';
import { AdultosMayores } from "../adultosMayores/adultosMayores";
import { CasasDeDia } from '../casasDeDia/casasDeDia';
import { Clubes } from '../clubes/clubes';
import { Asilos } from '../asilos/asilos';
import SimpleSchema from 'simpl-schema';
import CryptoJS from "react-native-crypto-js";

Meteor.methods({

    "crearAdultoMayor"(nombre,apellidos,ine,curp,sexo,edad, grupoSanguineo, direccion,codigoPostal,foto) {
        // Encrypt
        let ap = CryptoJS.AES.encrypt(apellidos, 'secret key 123').toString();
        let crp = CryptoJS.AES.encrypt(curp, 'secret key 123').toString();
        let dir = CryptoJS.AES.encrypt(direccion, 'secret key 123').toString();
        let gs = CryptoJS.AES.encrypt(grupoSanguineo, 'secret key 123').toString();
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let cp = CryptoJS.AES.encrypt(codigoPostal, 'secret key 123').toString();
        let ed = CryptoJS.AES.encrypt(edad, 'secret key 123').toString();
        let sx = CryptoJS.AES.encrypt(sexo, 'secret key 123').toString();
      
        new SimpleSchema({
            nombre: { type: String },
            apellidos: { type: String },
            curp: { type: String },
            sexo: { type: String },
            grupoSanguineo: { type: String },
            direccion: { type: String },
          }).validate({ nombre,apellidos,curp,sexo, grupoSanguineo, direccion});

        AdultosMayores.insert(
            {
                nombre: nom,
                apellidos: ap,
                ine: ine,
                curp: crp,
                sexo: sx,
                edad: ed,
                grupoSanguineo: gs,
                direccion: dir,
                codigoPostal: cp,
                foto: foto,
                tarjetas: []
            }

        )
    },

    "editarAdultoMayor"(idAdultoMayor,nombre,apellidos,ine,curp,sexo,edad, grupoSanguineo, direccion,codigoPostal,foto) {
        // Encrypt
        let ap = CryptoJS.AES.encrypt(apellidos, 'secret key 123').toString();
        let crp = CryptoJS.AES.encrypt(curp, 'secret key 123').toString();
        let dir = CryptoJS.AES.encrypt(direccion, 'secret key 123').toString();
        let gs = CryptoJS.AES.encrypt(grupoSanguineo, 'secret key 123').toString();
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let cp = CryptoJS.AES.encrypt(codigoPostal, 'secret key 123').toString();
        let ed = CryptoJS.AES.encrypt(edad, 'secret key 123').toString();
        let sx = CryptoJS.AES.encrypt(sexo, 'secret key 123').toString();
      
        new SimpleSchema({
            nombre: { type: String },
            apellidos: { type: String },
            curp: { type: String },
            sexo: { type: String },
            grupoSanguineo: { type: String },
            direccion: { type: String },
          }).validate({ nombre,apellidos,curp,sexo, grupoSanguineo, direccion });

        
        AdultosMayores.update(
            { _id: idAdultoMayor },
            {
                $set:
                {
                    nombre: nom,
                    apellidos: ap,
                    ine: ine,
                    curp: crp,
                    sexo: sx,
                    edad: ed,
                    grupoSanguineo: gs,
                    direccion: dir,
                    codigoPostal: cp,
                    foto: foto
                }
            }
        )
    },

    "borrarAdultoMayor"(idAdultoMayor) {
        AdultosMayores.remove(
            {
                "_id": idAdultoMayor
            },
             
        )
        //Hacer esto para coleccion que usa aadulto mayor
        CasasDeDia.update
            (
                { "usuarios": { $elemMatch: { "idReferencia": idAdultoMayor } } },
                { $pull: { "usuarios": { "idReferencia": idAdultoMayor } } },
                false,
                true
            )


        Clubes.update
            (
                { "usuarios": { $elemMatch: { "idReferencia": idAdultoMayor } } },
                { $pull: { "usuarios": { "idReferencia": idAdultoMayor } } },
                false,
                true
            )

        
        Asilos.update
            (
                { "usuarios": { $elemMatch: { "idReferencia": idAdultoMayor } } },
                { $pull: { "usuarios": { "idReferencia": idAdultoMayor } } },
                false,
                true
            )
    },

    "leerAdultoMayor"() {
        return AdultosMayores.find().fetch();
    },

    "anadirTarjeta"(idUsuario, idTarjeta, nombre, noTarjeta) {
        AdultosMayores.update(
            { _id: idUsuario },
            {
                $push: {
                    "tarjetas": {
                        idReferencia: idTarjeta,
                        nombre: nombre,
                        noTarjeta : noTarjeta
                    }
                }
            }
        )
    },

    "borrarTarjetaDeUsuario"(idTarjeta) {
        AdultosMayores.update
            (
                { "tarjetas": { $elemMatch: { "idReferencia": idTarjeta} } },
                { $pull: { "tarjetas": { "idReferencia": idTarjeta} } },
                false,
                true
            )
    },
    
    "editarTarjetaUsuario"(idAdultoSeleccionado, idEditar, noTarjeta, noTarjetaNueva) { 
        AdultosMayores.update(
            { _id: idAdultoSeleccionado, "tarjetas.idReferencia": idEditar, "tarjetas.noTarjeta": noTarjeta },
            { $set: { "tarjetas.$.noTarjeta": noTarjetaNueva } }
        )
    }

       


});










