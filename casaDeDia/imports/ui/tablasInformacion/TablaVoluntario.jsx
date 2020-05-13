import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Voluntarios } from "../../api/voluntarios/voluntarios";


function TablaVoluntario({voluntarios}) {


    function addVoluntario(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearVoluntario",
                    newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,
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
                    newData._id, newData.nombre, newData.apellidos, newData.apodo, newData.contrasena, newData.email,
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
            title="Voluntarios"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellidos", field: "apellidos" },
                    { title: "Apodo", field: "apodo" },
                    { title: "Contrasena", field: "contrasena" },
                    { title: "Email", field: "email"}
                ]
            }
            data={voluntarios}
            editable={{
                onRowAdd: addVoluntario,
                onRowUpdate: editVoluntario,
                onRowDelete: borrarVoluntario
            }}
        />
    );
}


export default withTracker(() => {
    return {
        voluntarios: Voluntarios.find({}).fetch(),
    };
})(TablaVoluntario);