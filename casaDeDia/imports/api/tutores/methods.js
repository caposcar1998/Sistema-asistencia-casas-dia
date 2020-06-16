import { Meteor } from 'meteor/meteor';
import { Tutores } from "../tutores/tutores";
import CryptoJS from "react-native-crypto-js";

Meteor.methods({
    "crearTutor"(nombre, apellido, fechaNacimiento, direccion, telefono, telefonoInteligente, curp, apodo,contrasena,idUsuario,visualizarTalleres,visualizarConvocatorias,visualizarCentros,visualizarColectivos,visualizarTutores,editarTutores) {
        // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let ap = CryptoJS.AES.encrypt(apellido, 'secret key 123').toString();
        let cont = CryptoJS.AES.encrypt(contrasena, 'secret key 123').toString();
        let dir = CryptoJS.AES.encrypt(direccion, 'secret key 123').toString();
        let crp = CryptoJS.AES.encrypt(curp, 'secret key 123').toString();

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
                nombre: nom,
                apellido: ap,
                fechaNacimiento: fechaNacimiento,
                direccion: dir,
                telefono: telefono,
                telefonoInteligente: telefonoInteligente, 
                curp : crp,
                apodo: apodo,
                contrasena: cont,
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
        // Encrypt
        let nom = CryptoJS.AES.encrypt(nombre, 'secret key 123').toString();
        let ap = CryptoJS.AES.encrypt(apellido, 'secret key 123').toString();
        let cont = CryptoJS.AES.encrypt(contrasena, 'secret key 123').toString();
        let dir = CryptoJS.AES.encrypt(direccion, 'secret key 123').toString();
        let crp = CryptoJS.AES.encrypt(curp, 'secret key 123').toString();
        
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
                    nombre: nom,
                    apellido: ap,
                    fechaNacimiento: fechaNacimiento,
                    direccion: dir,
                    telefono: telefono,
                    telefonoInteligente: telefonoInteligente,
                    curp: crp,
                    apodo: apodo,
                    contrasena: cont,
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