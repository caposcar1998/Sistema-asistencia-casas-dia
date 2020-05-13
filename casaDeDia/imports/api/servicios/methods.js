import { Meteor } from 'meteor/meteor';
import { Servicios } from "../servicios/servicios";

Meteor.methods({


    "crearServicio"(nombre,tipoServicio,telefono,direccion,vigente, redSocial1, redSocial2,redSocial3,fechaRegistro) {
        Servicios.insert(
            {
                tipoServicio: tipoServicio,
                nombre: nombre,
                telefono: telefono,
                direccion: direccion,
                vigente: vigente,
                redSocial1: redSocial1,
                redSocial2: redSocial2,
                redSocial3: redSocial3,
                fechaRegistro: fechaRegistro
            }

        )
    },

    "editarServicio"(idServicio,nombre,tipoServicio,telefono,direccion,vigente, redSocial1, redSocial2,redSocial3,fechaRegistro) {
        Servicios.update(
            { _id: idServicio },
            {
                $set:
                {
                    tipoServicio: tipoServicio,
                    nombre: nombre,
                    telefono: telefono,
                    direccion: direccion,
                    vigente: vigente,
                    redSocial1: redSocial1,
                    redSocial2: redSocial2,
                    redSocial3: redSocial3,
                    fechaRegistro: fechaRegistro
                }
            }
        )
    },

    "borrarServicio"(idAdultoMayor) {
        Servicios.remove(
            {
                "_id": idServicio
            }
        )
    },

    "leerServicio"() {
        return Servicios.find().fetch();
    }


});










