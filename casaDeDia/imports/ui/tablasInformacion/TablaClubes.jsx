import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Clubes } from "../../api/clubes/clubes";


function TablaClubes({ clubes }) {


    function addClub(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearClub",
                    newData.nombre, newData.direccion, newData.actividades, newData.restricciones, newData.horario, newData.horarioAtencion, newData.cupoLimite,
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
    function editClub(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarClub",
                    newData._id, newData.nombre, newData.direccion, newData.actividades, newData.restricciones, newData.horario, newData.horarioAtencion, newData.cupoLimite,
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

    function borrarClub(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarClub",
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
            title="Clubes"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Direccion", field: "direccion" },
                    { title: "Actividades", field: "actividades" },
                    { title: "Restricciones", field: "restricciones" },
                    { title: "Horario", field: "horario", type: "datetime" },
                    { title: "Horario atencion", field: "horarioAtencion", type: "datetime" },
                    { title: "cupo limite", field: "cupoLimite", type: "numeric" },

                ]
            }
            data={clubes}
            editable={{
                onRowAdd: addClub,
                onRowUpdate: editClub,
                onRowDelete: borrarClub
            }}
        />
    );
}


export default withTracker(() => {
    return {
        clubes: Clubes.find({}).fetch(),
    };
})(TablaClubes);