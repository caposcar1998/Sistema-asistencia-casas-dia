import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { CasasDeDia } from "../../api/casasDeDia/casasDeDia";


function TablaCasaDeDia({ casasDeDia }) {


    function addCasaDeDia(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearCasaDeDia",
                    newData.nombre, newData.direccion, newData.actividades,newData.restricciones, newData.horario ,newData.horarioAtencion, newData.cupoLimite,
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
    function editCasaDeDia(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarCasaDeDia",
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

    function borrarCasaDeDia(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarCasaDeDia",
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
            title="CasaDeDias"
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
            data={casasDeDia}
            editable={{
                onRowAdd: addCasaDeDia,
                onRowUpdate: editCasaDeDia,
                onRowDelete: borrarCasaDeDia
            }}
        />
    );
}


export default withTracker(() => {
    return {
        casasDeDia: CasasDeDia.find({}).fetch(),
    };
})(TablaCasaDeDia);