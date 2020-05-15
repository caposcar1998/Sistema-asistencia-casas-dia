import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Colectivos } from "../../api/colectivos/colectivos"

function TablaColectivo({colectivos}) {
        function addColectivo(newData) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("crearColectivo",
                        newData.idTutor, newData.nombre, newData.descripcion, newData.categoria,
                        (err, res) => {
                            if (err) {
                                alert("Error al crear al colectivo, verifique los campos o que el tutor exista.")
                                reject()
                            } else {
                                alert("Se creó el colectivo con éxito")
                                resolve()
                            }
                    });
                }
            )
        };

        function editColectivo(newData) {
            return new Promise(
                (resolve, reject) => {
                Meteor.call("editarColectivo",
                    newData._id, newData.idTutor, newData.nombre, newData.descripcion, newData.categoria,
                    (err, res) => {
                        if (err) {
                            alert("Error al editar colectivo")
                            reject()
                        } else {
                            alert("Se editó el colectivo con éxito")
                            resolve()
                        }
                    });
                }
            )
        };
    
        function borrarColectivo(data) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("borrarColectivo",
                        data._id,
                            (err, res) => {
                                if (err) {
                                    alert("Error al borrar el Colectivo")
                                    reject()
                                } else {
                                    alert("Se borró el Colectivo")
                                    resolve()
                                }
                            });
                     }
            )
        };

    return (
        <MaterialTable
            title="Colectivo"
            icons={tableIcons}
            columns={
                [
                    { title: "id", field: "_id" },
                    { title: "idTutor", field: "idTutor" },
                    { title: "nombre", field: "nombre" },
                    { title: "descripcion", field: "descripcion"},
                    { title: "categoria", field: "categoria" }
                ]
            }
            data={colectivos}
            editable={{
                onRowAdd: addColectivo,
                onRowUpdate: editColectivo,
                onRowDelete: borrarColectivo
            }}
        />
    );
}

export default withTracker(() => {
    return {
        colectivos: Colectivos.find({}).fetch(),
    };
})(TablaColectivo);