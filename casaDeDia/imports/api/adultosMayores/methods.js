import { Meteor } from 'meteor/meteor';
import { AdultosMayores } from "../adultosMayores/adultosMayores";
import { CasasDeDia } from '../casasDeDia/casasDeDia';
import { Clubes } from '../clubes/clubes';
import { Asilos } from '../asilos/asilos';
import SimpleSchema from 'simpl-schema';



Meteor.methods({


    "crearAdultoMayor"(nombre,apellidos,curp,sexo,edad, grupoSanguineo, direccion,codigoPostal,foto) {
        
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
                nombre: nombre,
                apellidos: apellidos,
                curp: curp,
                sexo: sexo,
                edad: edad,
                grupoSanguineo: grupoSanguineo,
                direccion: direccion,
                codigoPostal: codigoPostal,
                foto: foto,
                tarjetas: []
            }

        )
    },

    "editarAdultoMayor"(idAdultoMayor,nombre,apellidos,curp,sexo,edad, grupoSanguineo, direccion,codigoPostal,foto) {
        
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
                    nombre: nombre,
                    apellidos: apellidos,
                    curp: curp,
                    sexo: sexo,
                    edad: edad,
                    grupoSanguineo: grupoSanguineo,
                    direccion: direccion,
                    codigoPostal: codigoPostal,
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

    "anadirTarjeta"(idUsuario, idTarjeta, nombre) {
        AdultosMayores.update(
            { _id: idUsuario },
            {
                $push: {
                    "tarjetas": {
                        idReferencia: idTarjeta,
                        nombre: nombre
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
     }


});










