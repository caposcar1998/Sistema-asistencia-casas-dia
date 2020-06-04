import { Meteor } from 'meteor/meteor';
import { ServiciosHospital } from '../serviciosHospital/serviciosHospital';
import { CasasDeDia } from "../casasDeDia/casasDeDia";
import { Clubes } from "../clubes/clubes";
import { Asilos } from "../asilos/asilos";

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


    },

    "leerServicioHospital"() {
        return ServiciosHospital.find().fetch();
    }


});
