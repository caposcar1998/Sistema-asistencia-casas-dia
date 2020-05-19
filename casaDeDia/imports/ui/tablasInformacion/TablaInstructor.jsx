import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Instructores } from "../../api/instructores/instructores";


function TablaInstructor({instructores}) {


    function addInstructor(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearInstructor",
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
    function editInstructor(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarInstructor",
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

    function borrarInstructor(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarInstructor",
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
            title="Instructores"
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