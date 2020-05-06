import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Asilos } from "../../api/asilos/asilos";


function TablaAsilo({asilos}) {


    function addAsilo(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearAsilo",
                    newData.nombre, newData.direccion, newData.servicios, newData.horarioAtencion, newData.precio, newData.telefono,
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
    function editAsilo(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarAsilo",
                    newData._id, newData.nombre, newData.direccion, newData.servicios, newData.horarioAtencion, newData.precio, newData.telefono,
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

    function borrarAsilo(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarAsilo",
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
            title="Asilos"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Direccion", field: "direccion" },
                    { title: "Servicios", field: "servicios" },
                    { title: "HorarioAtencion", field: "horarioAtencion", type:"datetime" },
                    { title: "Precio", field: "precio", type:"currency" },
                    { title: "telefono", field: "telefono", type: "numeric" },

                ]
            }
            data={asilos}
            editable={{
                onRowAdd: addAsilo,
                onRowUpdate: editAsilo,
                onRowDelete: borrarAsilo
            }}
        />
    );
}


export default withTracker(() => {
    return {
        asilos: Asilos.find({}).fetch(),
    };
})(TablaAsilo);