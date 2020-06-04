import { Meteor } from 'meteor/meteor';
import { Establecimientos } from '../establecimientos/establecimientos';
import { CasasDeDia } from "../casasDeDia/casasDeDia";
import { Clubes } from "../clubes/clubes";
import { Asilos } from "../asilos/asilos";

Meteor.methods({


    "crearEstablecimiento"(nombre, descripcion, direccion) {
        Establecimientos.insert(
            {
                nombre: nombre,
                descripcion: descripcion,
                direccion: direccion
            }

        )
    },

    "editarEstablecimiento"(idEstablecimiento, nombre, descripcion, direccion) {
        Establecimientos.update(
            { _id: idEstablecimiento},
            {
                $set:
                {
                    nombre: nombre,
                    descripcion: descripcion,
                    direccion: direccion
                }
            }
        )
    },

    "borrarEstablecimiento"(Establecimiento) {
        //Borrar establecimiento de activiades, Establecimientos es el _id se necesita cambiar
        Establecimientos.remove(
            {
                "_id": Establecimiento
            }
        )
        
    },

    "leerEstablecimiento"() {
        return Establecimientos.find().fetch();
    }


});

