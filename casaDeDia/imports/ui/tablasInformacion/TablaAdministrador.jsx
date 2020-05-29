import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Usuarios } from "../../api/usuarios/usuarios";


function TablaAdministrador({ administradores }) {


    function addAdministrador(newData) {
        val = validations(newData);

        if(val == true) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("crearUsuario",
                        newData.nombre, newData.usuario, newData.contrasena, newData.correo, newData.permisos,
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
        
        if (newData.nombre == null || newData.contrasena == null || newData.correo == null || newData.usuario == null) {
            window.alert("No se llenaron todos los campos, intete de nuevo.");
            return validation = false;
        }else if (newData.nombre == "" || newData.contrasena == "" || newData.correo == "" || newData.usuario == "") {
                window.alert("No se llenaron todos los campos, intete de nuevo.");
                return validation = false;
        }else if(reg.test(newData.correo) == false) {
            window.alert("No se ingresó un correo válido, intente de nuevo.");
            return validation = false;
        }else if(letters.test(newData.nombre)== false) {
            window.alert("El nombre y/o apellidos no deben de contener números, intente de nuevo.");
            return validation = false;
        }
        else {
            window.alert("¡Nuevo administrador registrado!");
            return validation = true;
        }
    
}

   function editAdministrador(newData) {
        val = validations(newData);

        if(val == true) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("editarUsuario",
                        newData.nombre, newData.usuario, newData.contrasena, newData.correo, newData.permisos,
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

    function borrarAdministrador(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarUsuarios",
                    data._id,
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
            title="Administradores"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Usuario", field: "usuario" },
                    { title: "Contrasena", field: "contrasena" },
                    { title: "Correo", field: "correo" },
                    { title: "Permisos", field: "permisos" }
                ]
            }
            data={administradores}
            editable={{
                onRowAdd: addAdministrador,
                onRowUpdate: editAdministrador,
                onRowDelete: borrarAdministrador
            }}
        />
    );
}


export default withTracker(() => {
    return {
        administradores: Usuarios.find({}).fetch(),
    };
})(TablaAdministrador);