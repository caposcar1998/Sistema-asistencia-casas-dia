import { Meteor } from 'meteor/meteor';
import { Colectivos } from "../colectivos/colectivos";

Meteor.methods({
        "crearColectivo"(nombre, descripcion, tutores, categoria, cupoLimite, foto) {
            Colectivos.insert(
                {
                    nombre: nombre,
                    descripcion: descripcion,
                    tutores: tutores,
                    categoria: categoria,
                    cupoLimite: cupoLimite,
                    foto: foto,
                }
            )
        },

        "editarColectivo"(idColectivo, nombre, descripcion, tutores, categoria, cupoLimite, foto) {
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
                        foto: foto
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
});