import { Meteor } from 'meteor/meteor';
import { Tutores } from "../tutores/tutores";

Meteor.methods({
    "crearTutor"(nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente, curp, apodo,contrasena,idUsuario,visualizarTalleres,visualizarConvocatorias,visualizarCentros,visualizarColectivos,visualizarTutores,editarTutores) {
        idUsuario = Accounts.createUser({
            username: apodo,
            password: contrasena,
            profile:{
                role: 'tutores',
                visualizarTalleres:visualizarTalleres,
                visualizarConvocatorias:visualizarConvocatorias,
                visualizarCentros:visualizarCentros,
                visualizarColectivos:visualizarColectivos,
                visualizarTutores:visualizarTutores,
                editarTutores:editarTutores
            }
        }),
        Tutores.insert(
            {
                nombre: nombre,
                apellido: apellido,
                fechaNacimiento: fechaNacimiento,
                direccion: direccion,
                telefono: telefono,
                telefonoInteligente: telefonoInteligente, 
                curp : curp,
                apodo: apodo,
                contrasena: contrasena,
                idUsuario: idUsuario,
                visualizarTalleres:visualizarTalleres,
                visualizarConvocatorias:visualizarConvocatorias,
                visualizarCentros:visualizarCentros,
                visualizarColectivos:visualizarColectivos,
                visualizarTutores:visualizarTutores,
                editarTutores:editarTutores
            }
        ) 
     },

    "editarTutor"(idTutor, nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente, curp,apodo,contrasena,idUsuario,visualizarTalleres,visualizarConvocatorias,visualizarCentros,visualizarColectivos,visualizarTutores,editarTutores) { 
        Meteor.users.update(idUsuario,{
            $set:{
                username: apodo,
                profile:{
                    role: 'tutores',
                    visualizarTalleres:visualizarTalleres,
                    visualizarConvocatorias:visualizarConvocatorias,
                    visualizarCentros:visualizarCentros,
                    visualizarColectivos:visualizarColectivos,
                    visualizarTutores:visualizarTutores,
                    editarTutores:editarTutores
                }
            }
        });

        if(contrasena != 'the same'){
            Accounts.setPassword(idUsuario, contrasena)
        }
        
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
                    curp: curp,
                    apodo: apodo,
                    contrasena: contrasena,
                    idUsuario: idUsuario,
                    visualizarTalleres:visualizarTalleres,
                    visualizarConvocatorias:visualizarConvocatorias,
                    visualizarCentros:visualizarCentros,
                    visualizarColectivos:visualizarColectivos,
                    visualizarTutores:visualizarTutores,
                    editarTutores:editarTutores
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