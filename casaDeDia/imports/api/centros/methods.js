import { Meteor } from 'meteor/meteor';
import { Centros } from "../centros/centros";
Meteor.methods({

    "crearCentro"(calle, delegacion, codigoPostal, numeroTelefonico){
            Centros.insert(
                {
                    calle: calle,
                    delegacion: delegacion,
                    codigoPostal: codigoPostal,
                    numeroTelefonico: numeroTelefonico
                }
            ) 
        },
 
    "editarCentro"(idCentro, calle, delegacion, codigoPostal, numeroTelefonico) { 
        Centros.update(
            { _id: idCentro},
            {
                $set:
                {
                    calle: calle,
                    delegacion: delegacion,
                    codigoPostal: codigoPostal,
                    numeroTelefonico: numeroTelefonico
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