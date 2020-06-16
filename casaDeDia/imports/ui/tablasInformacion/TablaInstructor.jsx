import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Instructores } from "../../api/instructores/instructores";
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import CryptoJS from "react-native-crypto-js";

Tracker.autorun(()=>{

function TablaInstructor({instructores}) {

    const d = (instructores) => instructores.map((instructor) =>{
        // Decrypt
        let bytes  = CryptoJS.AES.decrypt(instructor.nombre, 'secret key 123');
        let nombre_instructor = bytes.toString(CryptoJS.enc.Utf8);
        let bytes2  = CryptoJS.AES.decrypt(instructor.apellidos, 'secret key 123');
        let apellidos_instructor = bytes2.toString(CryptoJS.enc.Utf8);
        let bytes3  = CryptoJS.AES.decrypt(instructor.email, 'secret key 123');
        let email_instructor = bytes3.toString(CryptoJS.enc.Utf8);
        let bytes4  = CryptoJS.AES.decrypt(instructor.contrasena, 'secret key 123');
        let contrsaena_instructor = bytes4.toString(CryptoJS.enc.Utf8);
        return({
            nombre:nombre_instructor,
            _id:instructor._id,
            apellidos: apellidos_instructor,
            apodo:instructor.apodo,
            contrasena: contrsaena_instructor,
            email: email_instructor,
            visualizarAdultoMayor:instructor.visualizarAdultoMayor,
            editarAdultoMayor:instructor.editarAdultoMayor,
            visualizarVoluntario:instructor.visualizarVoluntario,
            editarVoluntario:instructor.editarVoluntario,
            visualizarInstructor:instructor.visualizarInstructor,
            editarInstructor:instructor.editarInstructor,
            idUsuario:instructor.idUsuario,
            visualizarAsilo:instructor.visualizarAsilo,
            visualizarCasasDeDia:instructor.visualizarCasasDeDia,
            visualizarClubes:instructor.visualizarClubes,
            visualizarServicios:instructor.visualizarServicios,
            visualizarActividades:instructor.visualizarActividades,
            visualizarTarjetas:instructor.visualizarTarjetas,
            visualizarEmpleados:instructor.visualizarEmpleados,
            editarEmpleados:instructor.editarEmpleados,
            visualizarBeneficios:instructor.visualizarBeneficios,
            visualizarTutores:instructor.visualizarTutores,
            editarTutores:instructor.editarTutores,
            visualizarTalleres:instructor.visualizarTalleres,
            visualizarConvocatorias:instructor.visualizarConvocatorias,
            visualizarCentros:instructor.visualizarCentros,
            visualizarColectivos:instructor.visualizarColectivos,
            generarReportes:instructor.generarReportes,
            visualizarRestricciones:instructor.visualizarRestricciones,
            visualizarEstablecimiento:instructor.visualizarEstablecimiento,
            editarEstablecimiento:instructor.editarEstablecimiento,
            visualizarServiciosHospital:instructor.visualizarServiciosHospital,
            editarServiciosHospital:instructor.editarServiciosHospital

        });
    });


    function addInstructor(newData) {

        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearInstructor",
                newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.ine,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,newData.visualizarAsilo,newData.visualizarCasasDeDia,newData.visualizarClubes,newData.visualizarServicios,newData.visualizarActividades,newData.visualizarTarjetas,newData.visualizarEmpleados,newData.editarEmpleados,newData.visualizarBeneficios,newData.visualizarTutores,newData.editarTutores,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos, newData.generarReportes, newData.visualizarRestricciones,newData.visualizarEstablecimiento,newData.editarEstablecimiento,newData.visualizarServiciosHospital,newData.editarServiciosHospital,
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




    function editInstructor(newData) {

        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarInstructor",
                    newData._id, newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.ine,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,newData.idUsuario,newData.visualizarAsilo,newData.visualizarCasasDeDia,newData.visualizarClubes,newData.visualizarServicios,newData.visualizarActividades,newData.visualizarTarjetas,newData.visualizarEmpleados,newData.editarEmpleados,newData.visualizarBeneficios,newData.visualizarTutores,newData.editarTutores,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos, newData.generarReportes,newData.visualizarRestricciones,newData.visualizarEstablecimiento,newData.editarEstablecimiento,newData.visualizarServiciosHospital,newData.editarServiciosHospital,
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
 
            

    function borrarInstructor(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarInstructor",
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

    if(Meteor.user() && Meteor.user().profile.editarInstructor !== true){
        return (

            <MaterialTable
                title="Instructores"
                icons={tableIcons}
                columns={
                    [
                        { title: "Nombre", field: "nombre" },
                        { title: "Apellidos", field: "apellidos" },
                        { title: "Usuario", field: "apodo" },
                        { title: "Contrasena", field: "contrasena" },
                        { title: "Email", field: "email"},
                        { title: "INE", field: "ine"},
                    ]
                }
                data={d(instructores)}
            />
        );
    }

    return (

        <MaterialTable
            title="Instructores"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellidos", field: "apellidos" },
                    { title: "Usuario", field: "apodo" },
                    { title: "Contrasena", field: "contrasena" },
                    { title: "Email", field: "email"},
                    { title: "INE", field: "ine"},
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
                    { title: "Generar Reportes", field: "generarReportes", type:'boolean'},
                    { title: "Visualizar Restricciones", field: "visualizarRestricciones", type:'boolean'},
                    { title: "Visualizar Establecimientos", field: "visualizarEstablecimiento", type: 'boolean'},
                    { title: "Editar Establecimiento", field: "editarEstablecimiento", type: 'boolean'},
                    { title: "Visualizar Servicios de Hospital", field: "visualizarServiciosHospital", type: 'boolean'},
                    { title: "Editar Servicios de Hospital", field: "editarServiciosHospital", type: 'boolean'},
                ]
            }
            data={d(instructores)}
            editable={{
                onRowAdd: addInstructor,
                onRowUpdate: editInstructor,
                onRowDelete: borrarInstructor
            }}
        />
    );
}


export default withTracker(() => {
    Meteor.subscribe("instructores");
    return {
        instructores: Instructores.find({}).fetch(),
    };
})(TablaInstructor);

});