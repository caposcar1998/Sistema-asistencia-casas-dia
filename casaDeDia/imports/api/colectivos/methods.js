import { Meteor } from 'meteor/meteor';
import { Tutores } from "../tutores/tutores";
import { Colectivos } from "../colectivos/colectivos";

Meteor.methods({

    "crearColectivo"(idTutor, nombre, descripcion, categoria){
        const idTutor_c = Tutores.findOne({
            "_id": idTutor
        })
        if (idTutor_c.nombre == null) { 
            throw new Meteor.Error(idTutor);
        } else{
            Colectivos.insert(
                {
                    idTutor: idTutor,
                    nombre: nombre,
                    descripcion: descripcion,
                    categoria: categoria
                }
            ) 
        }
    },
 
    "editarColectivo"(idColectivo, idTutor, nombre, descripcion, categoria) { 
        Colectivos.update(
            { _id: idColectivo},
            {
                $set:
                {
                    idTutor: idTutor,
                    nombre: nombre,
                    descripcion: descripcion,
                    categoria: categoria
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

    "leerColectivo"() {
            return Colectivos.find().fetch();
    }
});