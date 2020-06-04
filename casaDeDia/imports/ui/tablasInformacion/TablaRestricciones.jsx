import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Restricciones } from '../../api/restricciones/restricciones';
import { Meteor } from 'meteor/meteor';

function TablaRestricciones({ restricciones }) {

    function addRestricciones(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearRestriccion",
                    newData.nombre, newData.descripcion,
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
    function editRestricciones(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarRestriccion",
                    newData.nombre, newData.descripcion,
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

    function borrarRestricciones(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarRestriccion",
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
            title="Restricciones"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "descripcion", field: "descripcion" },
                ]
            }
            data={restricciones}
            editable={{
                onRowAdd: addRestricciones,
                onRowUpdate: editRestricciones,
                onRowDelete: borrarRestricciones
            }}
        />
    );
}


export default withTracker(() => {
    Meteor.subscribe("restricciones");
    return {
        restricciones: Restricciones.find({}).fetch(),
    };
})(TablaRestricciones);