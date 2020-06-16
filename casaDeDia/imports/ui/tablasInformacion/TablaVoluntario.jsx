import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Voluntarios } from "../../api/voluntarios/voluntarios";
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import CryptoJS from "react-native-crypto-js";

Tracker.autorun(()=>{

function TablaVoluntario({voluntarios}) {

    const d = (voluntarios) => voluntarios.map((voluntario) =>{
        // Decrypt
        let bytes  = CryptoJS.AES.decrypt(voluntario.nombre, 'secret key 123');
        let nombre_voluntario = bytes.toString(CryptoJS.enc.Utf8);
        let bytes2  = CryptoJS.AES.decrypt(voluntario.apellidos, 'secret key 123');
        let apellidos_voluntario = bytes2.toString(CryptoJS.enc.Utf8);
        let bytes3  = CryptoJS.AES.decrypt(voluntario.email, 'secret key 123');
        let email_voluntario = bytes3.toString(CryptoJS.enc.Utf8);
        let bytes4  = CryptoJS.AES.decrypt(voluntario.contrasena, 'secret key 123');
        let contrsaena_voluntario = bytes4.toString(CryptoJS.enc.Utf8);
        return({
            nombre:nombre_voluntario,
            _id:voluntario._id,
            apellidos: apellidos_voluntario,
            apodo:voluntario.apodo,
            contrasena: contrsaena_voluntario,
            email: email_voluntario,
            visualizarAdultoMayor:voluntario.visualizarAdultoMayor,
            editarAdultoMayor:voluntario.editarAdultoMayor,
            visualizarVoluntario:voluntario.visualizarVoluntario,
            editarVoluntario:voluntario.editarVoluntario,
            visualizarInstructor:voluntario.visualizarInstructor,
            editarInstructor:voluntario.editarInstructor,
            idUsuario:voluntario.idUsuario,
            visualizarAsilo:voluntario.visualizarAsilo,
            visualizarCasasDeDia:voluntario.visualizarCasasDeDia,
            visualizarClubes:voluntario.visualizarClubes,
            visualizarServicios:voluntario.visualizarServicios,
            visualizarActividades:voluntario.visualizarActividades,
            visualizarTarjetas:voluntario.visualizarTarjetas,
            visualizarEmpleados:voluntario.visualizarEmpleados,
            editarEmpleados:voluntario.editarEmpleados,
            visualizarBeneficios:voluntario.visualizarBeneficios,
            visualizarTutores:voluntario.visualizarTutores,
            editarTutores:voluntario.editarTutores,
            visualizarTalleres:voluntario.visualizarTalleres,
            visualizarConvocatorias:voluntario.visualizarConvocatorias,
            visualizarCentros:voluntario.visualizarCentros,
            visualizarColectivos:voluntario.visualizarColectivos,
            generarReportes:voluntario.generarReportes,
            visualizarRestricciones:voluntario.visualizarRestricciones,
            visualizarEstablecimiento:voluntario.visualizarEstablecimiento,
            editarEstablecimiento:voluntario.editarEstablecimiento,
            visualizarServiciosHospital:voluntario.visualizarServiciosHospital,
            editarServiciosHospital:voluntario.editarServiciosHospital
    
        });
    });

    function addVoluntario(newData) {

        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearVoluntario",
                newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.ine,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,newData.visualizarAsilo,newData.visualizarCasasDeDia,newData.visualizarClubes,newData.visualizarServicios,newData.visualizarActividades,newData.visualizarTarjetas,newData.visualizarEmpleados,newData.editarEmpleados,newData.visualizarBeneficios,newData.visualizarTutores,newData.editarTutores,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos,newData.generarReportes,newData.visualizarRestricciones,newData.visualizarEstablecimiento,newData.editarEstablecimiento,newData.visualizarServiciosHospital,newData.editarServiciosHospital,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            resolve()
                        }
                    });
                }
                )
         };


    function editVoluntario(newData) {

            return new Promise(
                (resolve, reject) => {
                    Meteor.call("editarVoluntario",
                        newData._id, newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.ine,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,newData.idUsuario,newData.visualizarAsilo,newData.visualizarCasasDeDia,newData.visualizarClubes,newData.visualizarServicios,newData.visualizarActividades,newData.visualizarTarjetas,newData.visualizarEmpleados,newData.editarEmpleados,newData.visualizarBeneficios,newData.visualizarTutores,newData.editarTutores,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos,newData.generarReportes,newData.visualizarRestricciones,newData.visualizarEstablecimiento,newData.editarEstablecimiento,newData.visualizarServiciosHospital,newData.editarServiciosHospital,
                        (err, res) => {
                            if (err) {
                                reject()
                            } else {
                                resolve()
                            }

                    });
                }
                )
         };


    function borrarVoluntario(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarVoluntario",
                    data._id, data.idUsuario,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            resolve()
                        }
                    });
            }
        )
    };

    if(Meteor.user() && Meteor.user().profile.editarVoluntario !== true){
        return (

            <MaterialTable
                title="Voluntarios"
                icons={tableIcons}
                columns={
                    [
                        { title: "Nombre", field: "nombre" },
                        { title: "Apellidos", field: "apellidos" },
                        { title: "Apodo", field: "apodo" },
                        { title: "Contrasena", field: "contrasena" },
                        { title: "Email", field: "email"},
                        { title: "INE", field: "ine" },
                    ]
                }
                data={d(voluntarios)}
            />
        );
    }

    return (

        <MaterialTable
            title="Voluntarios"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellidos", field: "apellidos" },
                    { title: "Apodo", field: "apodo" },
                    { title: "Contrasena", field: "contrasena" },
                    { title: "Email", field: "email"},
                    { title: "INE", field: "ine" },
                    { title: "Visualizar Adulto Mayor", field: "visualizarAdultoMayor", type:'boolean'},
                    { title: "Editar Adulto Mayor", field: "editarAdultoMayor", type:'boolean'},
                    { title: "Visualizar Voluntario", field: "visualizarVoluntario", type:'boolean'},
                    { title: "Editar Voluntario", field: "editarVoluntario", type:'boolean'},
                    { title: "Visualizar Instructor", field: "visualizarInstructor", type:'boolean'},
                    { title: "Editar Instructor", field: "editarInstructor", type:'boolean'},
                    { title: "Visualizar Asilos", field: "visualizarAsilo", type:'boolean'},
                    { title: "Visualizar Casas de Día", field: "visualizarCasasDeDia", type:'boolean'},
                    { title: "Visualizar Clubes", field: "visualizarClubes", type:'boolean'},
                    { title: "Visualizar Servicio", field: "visualizarServicios", type:'boolean'},
                    { title: "Visualizar Actividades", field: "visualizarActividades", type:'boolean'},
                    { title: "Visualizar Tarjetas", field: "visualizarTarjetas", type:'boolean'},
                    { title: "Visualizar Empleados", field: "visualizarEmpleados", type:'boolean'},
                    { title: "Editar Empleados", field: "editarEmpleados", type:'boolean'},
                    { title: "Visualizar Tutores", field: "visualizarTutores", type:'boolean'},
                    { title: "Editar Tutores", field: "editarTutores", type:'boolean'},
                    { title: "Visualizar Beneficios", field: "visualizarBeneficios", type:'boolean'},
                    { title: "Visualizar Colectivos", field: "visualizarColectivos", type:'boolean'},
                    { title: "Visualizar Talleres", field: "visualizarTalleres", type:'boolean'},
                    { title: "Visualizar Convocatorias", field: "visualizarConvocatorias", type:'boolean'},
                    { title: "Visualizar Centros", field: "visualizarCentros", type:'boolean'},
                    { title: "Generar reportes", field: "generarReportes", type:'boolean'},
                    { title: "Visualizar Restricciones", field: "visualizarRestricciones", type: 'boolean'},
                    { title: "Visualizar Establecimientos", field: "visualizarEstablecimiento", type: 'boolean'},
                    { title: "Editar Establecimiento", field: "editarEstablecimiento", type: 'boolean'},
                    { title: "Visualizar Servicios de Hospital", field: "visualizarServiciosHospital", type: 'boolean'},
                    { title: "Editar Servicios de Hospital", field: "editarServiciosHospital", type: 'boolean'},
                ]
            }
            data={d(voluntarios)}
            editable={{
                onRowAdd: addVoluntario,
                onRowUpdate: editVoluntario,
                onRowDelete: borrarVoluntario
            }}
        />
    );
}


export default withTracker(() => {
    Meteor.subscribe("voluntarios");
    return {
        voluntarios: Voluntarios.find({}).fetch(),
    };
})(TablaVoluntario);

});