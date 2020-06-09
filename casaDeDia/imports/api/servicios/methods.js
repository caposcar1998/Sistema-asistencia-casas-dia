import { Meteor } from 'meteor/meteor';
import { Servicios } from "../servicios/servicios";
import SimpleSchema from 'simpl-schema';

Meteor.methods({


    "crearServicio"(nombre, tipoServicio, telefono, direccion, vigente, redSocial1, redSocial2, redSocial3, fechaRegistro) {

        new SimpleSchema({
            nombre: { type: String },
            tipoServicio: { type: String },
            telefono: { type: String },
            direccion: { type: String },
            redSocial1: { type: String },
            redSocial2: { type: String },
            redSocial3: { type: String }
        }).validate({ nombre, tipoServicio, telefono, direccion, redSocial1, redSocial2, redSocial3 });

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

    "editarServicio"(idServicio, nombre, tipoServicio, telefono, direccion, vigente, redSocial1, redSocial2, redSocial3, fechaRegistro) {

        new SimpleSchema({
            nombre: { type: String },
            tipoServicio: { type: String },
            telefono: { type: String },
            redSocial1: { type: String },
            redSocial2: { type: String },
            redSocial3: { type: String }
        }).validate({ nombre, tipoServicio, telefono, direccion, redSocial1, redSocial2, redSocial3 });

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

    "borrarServicio"(idServicio) {
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







