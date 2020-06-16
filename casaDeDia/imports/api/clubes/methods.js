import { Meteor } from 'meteor/meteor';
import { Clubes } from "../clubes/clubes";

Meteor.methods({


    "crearClub"(nombre, direccion, actividades, restricciones, horarioApertura, horarioCierre, cupoLimite, codigoPostal,tipoInstitucion,costo ,foto) {
        Clubes.insert(
            {
                nombre: nombre,
                direccion: direccion,
                actividades: actividades,
                restricciones: restricciones,
                horarioApertura: horarioApertura,
                horarioCierre: horarioCierre,
                cupoLimite: cupoLimite,
                codigoPostal: codigoPostal,
                foto: foto,
                empleados: [],
                usuarios: [],
                tipoInstitucion: tipoInstitucion,
                costo: costo
            }

        )
    },

    "editarClub"(idClub, nombre, direccion, actividades, restricciones, horario, horarioAtencion, cupoLimite, codigoPostal, tipoInstitucion, costo ,foto) {
        Clubes.update(
            { _id: idClub },
            {
                $set:
                {
                    nombre: nombre,
                    direccion: direccion,
                    actividades: actividades,
                    restricciones: restricciones,
                    horario: horario,
                    horarioAtencion: horarioAtencion,
                    cupoLimite: cupoLimite,
                    codigoPostal: codigoPostal,
                    foto: foto,
                    tipoInstitucion: tipoInstitucion,
                    costo: costo
                }
            }
        )
    },

    "borrarClub"(idClub) {
        Clubes.remove(
            {
                "_id": idClub
            }
        )
    },

    "leerClubes"() {
        return Clubes.find().fetch();
    },

    "anadirAdultoClub"(idClub, idUsuario, nombre, curp) {
        Clubes.update(
            { _id: idClub },
            {
                $push: {
                    "usuarios": {
                        idReferencia: idUsuario,
                        nombre: nombre,
                        curp: curp
                    }
                }
            }
        )
    },

    "anadirUsuarioClub"(idClub,idUsuario, nombre, puesto) {
        Clubes.update(
            { _id: idClub },
            {
                $push: {
                    "empleados": {
                        idReferencia: idUsuario,
                        nombre: nombre,
                        puesto: puesto
                    }
                 } 
            }
        )
    },
    
    "borrarEmpleadoDeClub"(idEmpleado, puesto) {
        Clubes.update
            (
                { "empleados": { $elemMatch: { "idReferencia": idEmpleado, "puesto":puesto } } },
                { $pull: { "empleados": { "idReferencia": idEmpleado,"puesto": puesto } } },
                false,
                true
            )
    },

    "editarEmpleadoDeClub"(idClub,idEmpleado, puesto, puestoNuevo) {
        Clubes.update(
            { _id: idClub, "empleados.idReferencia": idEmpleado, "empleados.puesto": puesto },
            { $set: { "empleados.$.puesto": puestoNuevo } }
        )
    },

    "borrarUsuarioDeClub"(idUsuario, curp) {
        Clubes.update
            (
                { "usuarios": { $elemMatch: { "idReferencia": idUsuario, "curp": curp } } },
                { $pull: { "usuarios": { "idReferencia": idUsuario, "curp": curp } } },
                false,
                true
            )
    },

});



