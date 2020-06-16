import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Convocatorias } from "../../api/convocatorias/convocatorias"
import { Meteor } from 'meteor/meteor';

function TablaConvocatorias({convocatoria}) {
        function addConvocatoria(newData) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("crearConvocatoria",
                        newData.nombre,newData.descripcion, newData.fechaLanzamiento, newData.fechaFinalizacion,
                        (err, res) => {
                            if (err) {
                                alert("Error al crear la convocatoria")
                                reject()
                            } else {
                                alert("Se creó la convocatoria con éxito!")
                                resolve()
                            }
                    });
                }
            )
        };

        function editConvocatoria(newData) {
            return new Promise(
                (resolve, reject) => {
                Meteor.call("editarConvocatoria",
                    newData._id, newData.nombre,newData.descripcion, newData.fechaLanzamiento, newData.fechaFinalizacion,
                    (err, res) => {
                        if (err) {
                            alert("Error al encontrar la convocatoria deseada")
                            reject()
                        } else {
                            alert("Se editó la convocatoria con éxito!")
                            resolve()
                        }
                    });
                }
            )
        };
    
        function borrarConvocatoria(data) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("borrarConvocatoria",
                        data._id,
                            (err, res) => {
                                if (err) {
                                    alert("Error al borrar la convocatoria")
                                    reject()
                                } else {
                                    alert("Se borró la convocatoria")
                                    resolve()
                                }
                            });
                     }
            )
        };

    return (
        <MaterialTable
            title="Convocatorias"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Descripción", field: "descripcion" },
                    { title: "FechaLanzamiento", field: "fechaLanzamiento", type: "date" },
                    { title: "FechaFinalizacion", field: "fechaFinalizacion", type: "date" },

                ]
            }
            data={convocatoria}
            editable={{
                onRowAdd: addConvocatoria,
                onRowUpdate: editConvocatoria,
                onRowDelete: borrarConvocatoria
            }}
        />
    );
}

export default withTracker(() => {
    Meteor.subscribe("convocatorias");
    return {
        convocatoria: Convocatorias.find({}).fetch(),
    };
})(TablaConvocatorias);