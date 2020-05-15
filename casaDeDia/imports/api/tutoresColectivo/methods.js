import { Meteor } from 'meteor/meteor';
import { TutoresColectivo } from "../tutoresColectivo/tutoresColectivo";

Meteor.methods({
    "crearTutorColectivo"(nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente, curp) {
        TutoresColectivo.insert(
            {
                nombre: nombre,
                apellido: apellido,
                fechaNacimiento: fechaNacimiento,
                direccion: direccion,
                telefono: telefono,
                telefonoInteligente: telefonoInteligente, 
                curp : curp
            }
        ) 
     },

    "editarTutorColectivo"(idTutorColectivo, nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente, curp) { 
        TutoresColectivo.update(
            { _id: idTutorColectivo},
            {
                $set:
                {
                    nombre: nombre,
                    apellido: apellido,
                    fechaNacimiento: fechaNacimiento,
                    direccion: direccion,
                    telefono: telefono,
                    telefonoInteligente: telefonoInteligente,
                    curp: curp
                }
            }
        )
    },

    "borrarTutorColectivo"(idTutorColectivo) {
        TutoresColectivo.remove(
            {
                "_id": idTutorColectivo 
            }
        )
    },

    "leerTutorColectivo"() {
            return TutoresColectivo.find().fetch();
    }
});