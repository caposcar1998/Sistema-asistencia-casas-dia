import { Meteor } from 'meteor/meteor';
import { ServiciosHospital } from '../serviciosHospital/serviciosHospital';
import { CasasDeDia } from "../casasDeDia/casasDeDia";
import { Clubes } from "../clubes/clubes";
import { Asilos } from "../asilos/asilos";
import { Tarjetas } from '../tarjetas/tarjetas';

Meteor.methods({


    "crearServicioHospital"(nombre, vigencia, descripcion, laboratorio) {
        ServiciosHospital.insert(
            {
                nombre: nombre,
                vigencia: vigencia,
                descripcion: descripcion,
                laboratorio: laboratorio
            }

        )
    },

    "editarServicioHospital"(idServicioHospital, nombre, vigencia, descripcion, laboratorio) {
        ServiciosHospital.update(
            { _id: idServicioHospital},
            {
                $set:
                {
                    nombre: nombre,
                    vigencia: vigencia,
                    descripcion: descripcion,
                    laboratorio: laboratorio
                }
            }
        )
    },

    "borrarServicioHospital"(ServicioHospital) {
        //Borrar servicioHospital de activiades, ServiciosHospital es el _id se necesita cambiar
        ServiciosHospital.remove(
            {
                "_id": ServicioHospital
            }
        )
        Tarjetas.update
            (
                { "servicios": { $elemMatch: { "_id": ServicioHospital } } },
                { $pull: { "servicios": { "_id": ServicioHospital } } },
                false,
                true
            )

    


    },

    "leerServicioHospital"() {
        return ServiciosHospital.find().fetch();
    }


});

