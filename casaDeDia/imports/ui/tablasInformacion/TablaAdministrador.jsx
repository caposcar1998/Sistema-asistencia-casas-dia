import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Usuarios } from "../../api/usuarios/usuarios";
import { Meteor } from 'meteor/meteor';


function TablaAdministrador({ administradores }) {


    function addAdministrador(newData) {
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

    };
    function editAdministrador(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarUsuario",
                    newData._id, newData.nombre, newData.usuario, newData.contrasena, newData.correo, newData.permisos,
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
    Meteor.subscribe("usuarios");
    return {
        administradores: Usuarios.find({}).fetch(),
    };
})(TablaAdministrador);