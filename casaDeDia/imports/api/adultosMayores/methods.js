import { Meteor } from 'meteor/meteor';
import { AdultosMayores } from "../adultosMayores/adultosMayores";
import { CasasDeDia } from '../casasDeDia/casasDeDia';
import { Asilos } from '../asilos/asilos';


Meteor.methods({


    "crearAdultoMayor"(nombre,apellidos,curp,sexo,edad, grupoSanguineo, direccion,codigoPostal,foto) {
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
    }


});










