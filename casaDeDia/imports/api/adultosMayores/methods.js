import { Meteor } from 'meteor/meteor';
import { AdultosMayores } from "../adultosMayores/adultosMayores";

Meteor.methods({


    "crearAdultoMayor"(nombre,apellidos,curp,sexo,edad, grupoSanguineo, direccion) {
        AdultosMayores.insert(
            {
                nombre: nombre,
                apellidos: apellidos,
                curp: curp,
                sexo: sexo,
                edad: edad,
                grupoSanguineo: grupoSanguineo,
                direccion: direccion
            }

        )
    },

    "editarAdultoMayor"(idAdultoMayor,nombre,apellidos,curp,sexo,edad, grupoSanguineo, direccion) {
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
                    direccion: direccion
                }
            }
        )
    },

    "borrarAdultoMayor"(idAdultoMayor) {
        AdultosMayores.remove(
            {
                "_id": idAdultoMayor
            }
        )
    },

    "leerAdultoMayor"() {
        return AdultosMayores.find().fetch();
    }


});










