import { Meteor } from 'meteor/meteor';
import { Centros } from "../centros/centros";
Meteor.methods({

    "crearCentro"(nombre,calle, delegacion, codigoPostal, numeroTelefonico,foto){
            Centros.insert(
                {
                    nombre:nombre,
                    calle: calle,
                    delegacion: delegacion,
                    codigoPostal: codigoPostal,
                    numeroTelefonico: numeroTelefonico,
                    foto:foto
                }
            ) 
        },
 
    "editarCentro"(idCentro, nombre, calle, delegacion, codigoPostal, numeroTelefonico,foto) { 
        Centros.update(
            { _id: idCentro},
            {
                $set:
                {
                    nombre:nombre,
                    calle: calle,
                    delegacion: delegacion,
                    codigoPostal: codigoPostal,
                    numeroTelefonico: numeroTelefonico,
                    foto:foto
                }
            }
        )
    },

    "borrarCentro"(idCentro) {
        Centros.remove(
            {
                "_id": idCentro 
            }
        )
    },

    "leerCentro"() {
            return Centros.find().fetch();
    }
});