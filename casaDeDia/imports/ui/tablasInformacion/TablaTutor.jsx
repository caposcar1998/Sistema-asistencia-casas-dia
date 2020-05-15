import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Tutores } from "../../api/tutores/tutores"

function TablaTutor({tutores}) {
        function addTutor(newData) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("crearTutor",
                        newData.nombre, newData.apellido, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente, newData.curp,
                        (err, res) => {
                            if (err) {
                                alert("Error al Crear Al Tutor para Futuro Colectivo.")
                                reject()
                            } else {
                                alert("Se Creó el Tutor para Colectivo con Éxito.")
                                resolve()
                            }
                    });
                }
            )
        };

        function editTutor(newData) {
            return new Promise(
                (resolve, reject) => {
                Meteor.call("editarTutor",
                    newData._id, newData.nombre, newData.apellido, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente, newData.curp,
                    (err, res) => {
                        if (err) {
                            alert("Error al Editar al Tutor para Colectivo.")
                            reject()
                        } else {
                            alert("Se Editó el Tutor para Colectivo con Éxito.")
                            resolve()
                        }
                    });
                }
            )
        };
    
        function borrarTutor(data) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("borrarTutor",
                        data._id,
                            (err, res) => {
                                if (err) {
                                    alert("Error al borrar al Tutor del Colectivo")
                                    reject()
                                } else {
                                    alert("Se borró al Tutor del Colectivo.")
                                    resolve()
                                }
                            });
                     }
            )
        };

    return (
        <MaterialTable
            title="Tutores Colectivo"
            icons={tableIcons}
            columns={
                [
                    { title: "Id", field: "_id" },
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellido", field: "apellido" },
                    { title: "FechaNacimiento", field: "fechaNacimiento", type: "date" },
                    { title: "direccion", field: "direccion" },
                    { title: "telefono", field: "telefono" },
                    { title: "telefono Inteligente", field: "telefonoInteligente", type: "boolean" },
                    { title: "curp", field: "curp" }
                ]
            }
            data={tutores}
            editable={{
                onRowAdd: addTutor,
                onRowUpdate: editTutor,
                onRowDelete: borrarTutor
            }}
        />
    );
}

export default withTracker(() => {
    return {
        tutores: Tutores.find({}).fetch(),
    };
})(TablaTutor);