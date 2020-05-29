import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Instructores } from "../../api/instructores/instructores";


function TablaInstructor({instructores}) {


    function addInstructor(newData) {
        val = validations(newData);

        if(val == true) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("crearInstructor",
                    newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,
                        (err, res) => {
                            if (err) {
                                reject()
                            } else {
                                resolve()
                            }
                        });

                }

            )
        }else {
            location.reload();
        }

    };


    function validations(newData) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var letters = /^[A-Za-záéíóú]+$/;
        
        if (newData.nombre == null || newData.apellidos == null || newData.contrasena == null || newData.email == null || newData.apodo == null) {
            window.alert("No se llenaron todos los campos, intete de nuevo.");
            return validation = false;
        }else if (newData.nombre == "" || newData.apellidos == "" || newData.contrasena == "" || newData.email == "" || newData.apodo == "") {
            window.alert("No se llenaron todos los campos, intete de nuevo.");
            return validation = false;
        }else if(reg.test(newData.email) == false) {
            window.alert("No se ingresó un correo válido, intente de nuevo.");
            return validation = false;
        }else if(letters.test(newData.nombre)== false || letters.test(newData.apellido)== false) {
            window.alert("El nombre y/o apellidos no deben de contener números, intente de nuevo.");
            return validation = false;
        }
        else {
            window.alert("¡Nuevo instructor registrado!");
            return validation = true;
        }
    
}

    function editInstructor(newData) {
        val = validations(newData);
        if(val == true)
        {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("editarInstructor",
                        newData._id, newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,newData.visualizarAdultoMayor,newData.editarAdultoMayor,newData.visualizarVoluntario,newData.editarVoluntario,newData.visualizarInstructor,newData.editarInstructor,newData.idUsuario,
                        (err, res) => {
                            if (err) {
                                reject()
                            } else {
                                resolve()
                            }
                        }
                    );
                }
            )
        }
        else 
        {
            location.reload();
        } 
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
                    { title: "Editar Instructor", field: "editarInstructor", type:'boolean'}

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
    return {
        instructores: Instructores.find({}).fetch(),
    };
})(TablaInstructor);