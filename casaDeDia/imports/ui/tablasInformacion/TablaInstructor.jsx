import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Instructores } from "../../api/instructores/instructores";
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'

Tracker.autorun(()=>{

function TablaInstructor({instructores}) {


    function addInstructor(newData) {

        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearInstructor",
                newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,newData.visualizarAsilo,newData.visualizarCasasDeDia,newData.visualizarClubes,newData.visualizarServicios,newData.visualizarActividades,newData.visualizarTarjetas,newData.visualizarEmpleados,newData.editarEmpleados,newData.visualizarBeneficios,newData.visualizarTutores,newData.editarTutores,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos, newData.generarReportes,newData.visualizarEstablecimiento,newData.editarEstablecimiento,newData.visualizarServiciosHospital,newData.editarServiciosHospital,
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
                    newData._id, newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,newData.idUsuario,newData.visualizarAsilo,newData.visualizarCasasDeDia,newData.visualizarClubes,newData.visualizarServicios,newData.visualizarActividades,newData.visualizarTarjetas,newData.visualizarEmpleados,newData.editarEmpleados,newData.visualizarBeneficios,newData.visualizarTutores,newData.editarTutores,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos, newData.generarReportes,newData.visualizarEstablecimiento,newData.editarEstablecimiento,newData.visualizarServiciosHospital,newData.editarServiciosHospital,
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
                        { title: "Apodo", field: "apodo" },
                        { title: "Contrasena", field: "contrasena" },
                        { title: "Email", field: "email"},
                    ]
                }
                data={instructores}
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
                    { title: "Apodo", field: "apodo" },
                    { title: "Contrasena", field: "contrasena" },
                    { title: "Email", field: "email"},
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
                    { title: "Visualizar Establecimientos", field: "visualizarEstablecimiento", type: 'boolean'},
                    { title: "Editar Establecimiento", field: "editarEstablecimiento", type: 'boolean'},
                    { title: "Visualizar Servicios de Hospital", field: "visualizarServiciosHospital", type: 'boolean'},
                    { title: "Editar Servicios de Hospital", field: "editarServiciosHospital", type: 'boolean'},
                ]
            }
            data={instructores}
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