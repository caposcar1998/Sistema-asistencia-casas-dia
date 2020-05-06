import { Meteor } from 'meteor/meteor';
import { Asilos } from "../asilos/asilos";

Meteor.methods({


    "crearAsilo"(nombre,direccion, servicios, horarioAtencion,precio,telefono) {
        Asilos.insert(
            {
                nombre: nombre,
                direccion: direccion,
                servicios: servicios,
                horarioAtencion: horarioAtencion,
                precio: precio,
                telefono: telefono
            }

        )
    },

    "editarAsilo"(idAsilos,nombre, direccion, servicios, horarioAtencion, precio, telefono) {
        Asilos.update(
            { _id: idAsilos },
            {
                $set:
                {
                    nombre: nombre,
                    direccion: direccion,
                    servicios: servicios,
                    horarioAtencion: horarioAtencion,
                    precio: precio,
                    telefono: telefono
                }
            }
        )
    },

    "borrarAsilo"(idAsilos) {
        Asilos.remove(
            {
                "_id": idAsilos
            }
        )
    },

    "leerAsilo"() {
        return Asilos.find().fetch();
    }


});










