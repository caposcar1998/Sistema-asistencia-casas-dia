import { Meteor } from 'meteor/meteor';
import { Colectivos } from "../colectivos/colectivos";

Meteor.methods({
        "crearColectivo"(nombre, descripcion, tutores, categoria, cupoLimite, foto, redSocial1, redSocial2, redSocial3) {
            Colectivos.insert(
                {
                    nombre: nombre,
                    descripcion: descripcion,
                    tutores: tutores,
                    categoria: categoria,
                    cupoLimite: cupoLimite,
                    foto: foto,
                    redSocial1: redSocial1,
                    redSocial2: redSocial2,
                    redSocial3: redSocial3
                }
            )
        },

        "editarColectivo"(idColectivo, nombre, descripcion, tutores, categoria, cupoLimite, foto, redSocial1, redSocial2, redSocial3) {
            Colectivos.update(
                { _id: idColectivo},
                {
                    $set:
                    {
                        nombre: nombre,
                        descripcion: descripcion,
                        tutores: tutores,
                        categoria: categoria,
                        cupoLimite: cupoLimite,
                        foto: foto,
                        redSocial1: redSocial1,
                        redSocial2: redSocial2,
                        redSocial3: redSocial3
                    }
                }
            )
        },

        "borrarColectivo"(idColectivo) {
            Colectivos.remove(
                {
                    "_id": idColectivo
                }
            )
        },

        "leerColectivos"() {
            return Colectivos.find().fetch();
    },
        
    "colectivosPorCodigo"(codigoPostal) {

        let diferenciaCodigos;
        let colectivosCercanos = [];
        let colectivosTotales = (Colectivos.find().fetch());


        colectivosTotales.forEach(colectivo => {
            let codigoNumero = parseInt(colectivo.codigoPostal)
            diferenciaCodigos = codigoPostal - codigoNumero
            if (Math.abs(diferenciaCodigos) <= 20) {
                colectivosCercanos.push(colectivo)
            }
        });

        return colectivosCercanos


    }
});