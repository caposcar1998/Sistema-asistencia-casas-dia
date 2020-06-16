import { Meteor } from 'meteor/meteor';
import { Asilos } from "../asilos/asilos";

Meteor.methods({


    "crearAsilo"(nombre, direccion, actividades, restricciones, horarioApertura, horarioCierre, cupoLimite, codigoPostal, tipoInstitucion,costo ,foto) {
        Asilos.insert(
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

    "editarAsilo"(idAsilos, nombre, direccion, actividades, restricciones, horario, horarioAtencion, cupoLimite, codigoPostal ,tipoInstitucion, costo,foto) {
        Asilos.update(
            { _id: idAsilos },
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

    "borrarAsilo"(idAsilos) {
        Asilos.remove(
            {
                "_id": idAsilos
            }
        )
    },

    "leerAsilo"() {
        return Asilos.find().fetch();
    },

    "anadirAdultoAsilo"(idAsilos, idUsuario, nombre, curp) {
        Asilos.update(
            { _id: idAsilos },
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

    "anadirUsuarioAsilo"(idAsilos,idUsuario, nombre, puesto) {
        Asilos.update(
            { _id: idAsilos },
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
    
    "borrarEmpleadoDeAsilo"(idEmpleado, puesto) {
        Asilos.update
            (
                { "empleados": { $elemMatch: { "idReferencia": idEmpleado, "puesto":puesto } } },
                { $pull: { "empleados": { "idReferencia": idEmpleado,"puesto": puesto } } },
                false,
                true
            )
    },

    "editarEmpleadoDeAsilo"(idAsilos,idEmpleado, puesto, puestoNuevo) {
        Asilos.update(
            { _id: idAsilos, "empleados.idReferencia": idEmpleado, "empleados.puesto": puesto },
            { $set: { "empleados.$.puesto": puestoNuevo } }
        )
    },

    "borrarUsuarioDeAsilo"(idUsuario, curp) {
        Asilos.update
            (
                { "usuarios": { $elemMatch: { "idReferencia": idUsuario, "curp": curp } } },
                { $pull: { "usuarios": { "idReferencia": idUsuario, "curp": curp } } },
                false,
                true
            )
    },

});

















