import { Meteor } from 'meteor/meteor';
import { Voluntarios } from "../voluntarios/voluntarios";
import { Empleados } from "../empleados/empleados";
import { Instructores } from "../instructores/instructores";


Meteor.methods({

    "getNombreUsuario"(){
        const collection = Meteor.user().profile.role;
        const entro = Meteor.userId();
        function getUsuario(){
            if(collection == 'empleados'){
                return (Empleados.find({idUsuario:entro}).fetch())[0];
            }else if(collection == 'instructores'){
                return(Instructores.find({idUsuario:entro}).fetch())[0];
            }else if(collection == 'voluntarios'){
                return(Voluntarios.find({idUsuario:entro}).fetch())[0];
            }
        }
        

        //const idUsuario = Meteor.userId();
        

        

        return collection;
    },

    "getUsuarioActual"(){
        const collection = Meteor.user().profile.role;
        const entro = Meteor.userId();
        //const idUsuario = Meteor.userId();
        if(collection == 'empleados'){
            return (Empleados.find({idUsuario:entro}).fetch())[0];
        }else if(collection == 'instructores'){
            return (Instructores.find({idUsuario:entro}).fetch())[0];
        }else if(collection == 'voluntarios'){
            return (Voluntarios.find({idUsuario:entro}).fetch())[0];
        }
        return collection;
    }
    




})