import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Empleados } from "../../api/empleados/empleados";
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import CryptoJS from "react-native-crypto-js";

Tracker.autorun(()=>{

function TablaEmpleado({empleados}) {

    const d = (empleados) => empleados.map((empleado) =>{
        // Decrypt
        let bytes  = CryptoJS.AES.decrypt(empleado.nombre, 'secret key 123');
        let nombre_empleado = bytes.toString(CryptoJS.enc.Utf8);
        let bytes2  = CryptoJS.AES.decrypt(empleado.apellidos, 'secret key 123');
        let apellidos_empleado = bytes2.toString(CryptoJS.enc.Utf8);
        let bytes3  = CryptoJS.AES.decrypt(empleado.email, 'secret key 123');
        let email_empleado = bytes3.toString(CryptoJS.enc.Utf8);
        let bytes4  = CryptoJS.AES.decrypt(empleado.contrasena, 'secret key 123');
        let contrsaena_empleado = bytes4.toString(CryptoJS.enc.Utf8);
        return({
            nombre:nombre_empleado,
            _id:empleado._id,
            apellidos: apellidos_empleado,
            apodo: empleado.apodo,
            contrasena: contrsaena_empleado,
            email: email_empleado,
            visualizarAdultoMayor: empleado.visualizarAdultoMayor,
            editarAdultoMayor: empleado.editarAdultoMayor,
            visualizarVoluntario: empleado.visualizarVoluntario,
            editarVoluntario: empleado.editarVoluntario,
            visualizarInstructor: empleado.visualizarInstructor,
            editarInstructor: empleado.editarInstructor,
            idUsuario: empleado.idUsuario,
            visualizarAsilo: empleado.visualizarAsilo,
            visualizarCasasDeDia: empleado.visualizarCasasDeDia,
            visualizarClubes:empleado.visualizarClubes,
            visualizarServicios:empleado.visualizarServicios,
            visualizarActividades:empleado.visualizarActividades,
            visualizarTarjetas:empleado.visualizarTarjetas,
            visualizarEmpleados:empleado.visualizarEmpleados,
            editarEmpleados:empleado.editarEmpleados,
            visualizarBeneficios:empleado.visualizarBeneficios,
            visualizarTutores:empleado.visualizarTutores,
            editarTutores:empleado.editarTutores,
            visualizarTalleres:empleado.visualizarTalleres,
            visualizarConvocatorias:empleado.visualizarConvocatorias,
            visualizarCentros:empleado.visualizarCentros,
            visualizarColectivos:empleado.visualizarColectivos,
            generarReportes:empleado.generarReportes,
            visualizarRestricciones:empleado.visualizarRestricciones,
            visualizarEstablecimiento:empleado.visualizarEstablecimiento,
            editarEstablecimiento:empleado.editarEstablecimiento,
            visualizarServiciosHospital:empleado.visualizarServiciosHospital,
            editarServiciosHospital:empleado.editarServiciosHospital

        });
    });
    

    function addEmpleado(newData) {

        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearEmpleado",
                newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,newData.visualizarAsilo,newData.visualizarCasasDeDia,newData.visualizarClubes,newData.visualizarServicios,newData.visualizarActividades,newData.visualizarTarjetas,newData.visualizarEmpleados,newData.editarEmpleados,newData.visualizarBeneficios,newData.visualizarTutores,newData.editarTutores,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos,newData.generarReportes,newData.visualizarRestricciones,newData.visualizarEstablecimiento,newData.editarEstablecimiento,newData.visualizarServiciosHospital,newData.editarServiciosHospital,
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




    function editEmpleado(newData) {

            return new Promise(
                (resolve, reject) => {
                    Meteor.call("editarEmpleado",
                        newData._id, newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,newData.idUsuario,newData.visualizarAsilo,newData.visualizarCasasDeDia,newData.visualizarClubes,newData.visualizarServicios,newData.visualizarActividades,newData.visualizarTarjetas,newData.visualizarEmpleados,newData.editarEmpleados,newData.visualizarBeneficios,newData.visualizarTutores,newData.editarTutores,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos,newData.generarReportes,newData.visualizarRestricciones,newData.visualizarEstablecimiento,newData.editarEstablecimiento,newData.visualizarServiciosHospital,newData.editarServiciosHospital,
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
                
          

    function borrarEmpleado(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarEmpleado",
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

    if(Meteor.user() && Meteor.user().profile.editarEmpleados !== true){
        
        return (

            <MaterialTable
                title="Empleados"
                icons={tableIcons}
                columns={
                    [
                        { title: "Nombre", field: "nombre" },
                        { title: "Apellidos", field: "apellidos" },
                        { title: "Nombre de Usuario", field: "apodo" },
                        { title: "Contrasena", field: "contrasena" },
                        { title: "Email", field: "email"},
                    ]
                }
                data={d(empleados)}
            />
        );
    }

    
    return (
        
        <MaterialTable 
            title="Empleados"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellidos", field: "apellidos" },
                    { title: "Nombre de Usuario", field: "apodo" },
                    { title: "Contrasena", field: "contrasena" },
                    { title: "Email", field: "email", type:'email'},
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
                    { title: "Visualizar Establecimientos", field: "visualizarEstablecimiento", type:'boolean'},
                    { title: "Editar Establecimientos", field: "editarEstablecimiento", type:'boolean'},
                    { title: "Visualizar Servicios de Hospital", field: "visualizarServiciosHospital", type:'boolean'},
                    { title: "Editar Servicios de Hospital", field: "editarServiciosHospital", type:'boolean'},

                ]
            }
            data ={d(empleados)}
            editable={{
                onRowAdd: addEmpleado,
                onRowUpdate: editEmpleado,
                onRowDelete: borrarEmpleado
            }}
        />
    );
}

export default withTracker(() => {
    Meteor.subscribe("empleados");
    return {
        empleados: Empleados.find({}).fetch(),
    };
})(TablaEmpleado);

});