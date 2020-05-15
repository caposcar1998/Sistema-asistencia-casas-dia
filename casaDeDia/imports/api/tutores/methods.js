import { Meteor } from 'meteor/meteor';
import { Tutores } from "../tutores/tutores";

Meteor.methods({
    "crearTutor"(nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente, curp) {
        Tutores.insert(
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

    "editarTutor"(idTutor, nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente, curp) { 
        Tutores.update(
            { _id: idTutor},
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

    "borrarTutor"(idTutor) {
        Tutores.remove(
            {
                "_id": idTutor 
            }
        )
    },

    "leerTutor"() {
            return Tutores.find().fetch();
    }
});