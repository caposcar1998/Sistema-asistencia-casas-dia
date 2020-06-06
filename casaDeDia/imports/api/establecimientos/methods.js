import { Meteor } from 'meteor/meteor';
import { Establecimientos } from '../establecimientos/establecimientos';
import { CasasDeDia } from "../casasDeDia/casasDeDia";
import { Clubes } from "../clubes/clubes";
import { Asilos } from "../asilos/asilos";
import { Tarjetas } from '../tarjetas/tarjetas';

Meteor.methods({


    "crearEstablecimiento"(nombre, descripcion, direccion, verEstablecimientos, editarEstablecimientos) {
        Establecimientos.insert(
            {
                nombre: nombre,
                descripcion: descripcion,
                direccion: direccion,
                verEstablecimientos: verEstablecimientos,
                editarEstablecimientos: editarEstablecimientos
            }

        )
    },

    "editarEstablecimiento"(idEstablecimiento, nombre, descripcion, direccion, verEstablecimientos, editarEstablecimientos) {
        Establecimientos.update(
            { _id: idEstablecimiento},
            {
                $set:
                {
                    nombre: nombre,
                    descripcion: descripcion,
                    direccion: direccion,
                    verEstablecimientos: verEstablecimientos,
                    editarEstablecimientos: editarEstablecimientos
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

        Tarjetas.update
            (
                { "lugaresAceptados": { $elemMatch: { "_id": Establecimiento } } },
                { $pull: { "lugaresAceptados": { "_id": Establecimiento } } },
                false,
                true
            )
        
    },

    "leerEstablecimiento"() {
        return Establecimientos.find().fetch();
    }


});

