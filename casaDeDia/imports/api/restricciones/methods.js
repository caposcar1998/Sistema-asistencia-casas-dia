import { Meteor } from 'meteor/meteor';
import { Restricciones } from '../restricciones/restricciones';
import { CasasDeDia } from "../casasDeDia/casasDeDia";
import { Clubes } from "../clubes/clubes";
import { Asilos } from "../asilos/asilos";

Meteor.methods({


    "crearRestriccion"(nombre,descripcion) {
        Restricciones.insert(
            {
                nombre: nombre,
                descripcion: descripcion,
            }

        )
    },

    "editarRestriccion"(idRestriccion, nombre,descripcion) {
        Restricciones.update(
            { _id: idRestriccion},
            {
                $set:
                {
                    nombre: nombre,
                    descripcion: descripcion,
                }
            }
        )
    },

    "borrarRestriccion"(Restriccion) {
        Restricciones.remove(
            {
                "_id": Restriccion
            }
        ),
        //Hacer esto para coleccion que usa actividades
        CasasDeDia.update
            (
                { "restricciones": { $elemMatch: { "_id": Restriccion } } },
                { $pull: { "restricciones": { "_id": Restriccion } }},
                false,
                true
            )
        Asilos.update
            (
                { "restricciones": { $elemMatch: { "_id": Restriccion } } },
                { $pull: { "restricciones": { "_id": Restriccion } }},
                false,
                true 
            )

        Clubes.update
            (
                { "restricciones": { $elemMatch: { "_id": Restriccion } } },
                { $pull: { "restricciones": { "_id": Restriccion } }},
                false,
                true
            )



    },

    "leerRestriccion"() {
        return Restricciones.find().fetch();
    }


});