import { Meteor } from 'meteor/meteor';
import { CasasDeDia } from "../casasDeDia/casasDeDia";

Meteor.methods({


    "crearCasaDeDia"(nombre, direccion, actividades, restricciones, horarioApertura, horarioCierre, cupoLimite, codigoPostal, tipoInstitucion, costo, foto) {
        CasasDeDia.insert(
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

    "editarCasaDeDia"(idCasaDeDia, nombre, direccion, actividades, restricciones, horario, horarioAtencion, cupoLimite, codigoPostal, tipoInstitucion, costo, foto) {
        CasasDeDia.update(
            { _id: idCasaDeDia },
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

    "borrarCasaDeDia"(idCasaDeDia) {
        CasasDeDia.remove(
            {
                "_id": idCasaDeDia
            }
        )
    },

    "leerCasasDeDia"() {
        return CasasDeDia.find().fetch();
    },

    "encontrarCasaDeDia"(idCasaDeDia) {
        return CasasDeDia.findOne({_id: idCasaDeDia})
     },

    "anadirAdulto"(idCasaDeDia, idUsuario, nombre, curp) {
        CasasDeDia.update(
            { _id: idCasaDeDia },
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

    "anadirUsuario"(idCasaDeDia,idUsuario, nombre, puesto) {
        CasasDeDia.update(
            { _id: idCasaDeDia },
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
    
    "borrarEmpleadoDeCasa"(idEmpleado, puesto) {
        CasasDeDia.update
            (
                { "empleados": { $elemMatch: { "idReferencia": idEmpleado, "puesto":puesto } } },
                { $pull: { "empleados": { "idReferencia": idEmpleado,"puesto": puesto } } },
                false,
                true
            )
    },

    "editarEmpleadoDeCasa"(idCasaDeDia,idEmpleado, puesto, puestoNuevo) {
        CasasDeDia.update(
            { _id: idCasaDeDia, "empleados.idReferencia": idEmpleado, "empleados.puesto": puesto },
            { $set: { "empleados.$.puesto": puestoNuevo } }
        )
    },

    "borrarUsuarioDeCasa"(idUsuario, curp) {
        CasasDeDia.update
            (
                { "usuarios": { $elemMatch: { "idReferencia": idUsuario, "curp": curp } } },
                { $pull: { "usuarios": { "idReferencia": idUsuario, "curp": curp } } },
                false,
                true
            )
    },

});



