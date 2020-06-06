import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Establecimientos } from '../../api/establecimientos/establecimientos';
import { Meteor } from 'meteor/meteor';



function TablaEstablecimientos({ establecimientos }) {


    function addEstablecimientos(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearEstablecimiento",
                    newData.nombre, newData.descripcion, newData.direccion, newData.verEstablecimientos, newData.editarEstablecimientos,
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
    function editEstablecimientos(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarEstablecimiento",
                newData.nombre, newData.descripcion, newData.direccion, newData.verEstablecimientos, newData.editarEstablecimientos,
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

    function borrarEstablecimientos(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarEstablecimiento",
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
            title="Establecimientos"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Descripción", field: "descripcion" },
                    { title: "Dirección", field: "direccion" },
                    { title: "Ver Establecimientos", field: "verEstablecimientos", type: 'boolean'},
                    { title: "Editar Establecimientos", field: "editarEstablecimientos", type: 'boolean'}
                ]
            }
            data={establecimientos}
            editable={{
                onRowAdd: addEstablecimientos,
                onRowUpdate: editEstablecimientos,
                onRowDelete: borrarEstablecimientos
            }}
        />
    );
}


export default withTracker(() => {
    Meteor.subscribe("establecimientos");
    return {
        establecimientos: Establecimientos.find({}).fetch(),
    };
})(TablaEstablecimientos);