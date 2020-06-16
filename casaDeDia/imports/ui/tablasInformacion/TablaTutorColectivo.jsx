import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { TutoresColectivo } from "../../api/tutoresColectivo/tutoresColectivo"

function TablaTutorColectivo({tutoresColectivo}) {
        function addTutorColectivo(newData) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("crearTutorColectivo",
                        newData.nombre, newData.apellido, newData.correoElectronico, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente, newData.curp,
                        (err, res) => {
                            if (err) {
                                alert("Error al crear al tutor para colectivo")
                                reject()
                            } else {
                                alert("Se creó el tutor para colectivo con éxito")
                                resolve()
                            }
                    });
                }
            )
        };

        function editTutorColectivo(newData) {
            return new Promise(
                (resolve, reject) => {
                Meteor.call("editarTutorColectivo",
                    newData._id, newData.nombre, newData.apellido, newData.correoElectronico, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente, newData.curp,
                    (err, res) => {
                        if (err) {
                            alert("Error al al tutor para colectivo")
                            reject()
                        } else {
                            alert("Se editó el tutor para colectivo con éxito")
                            resolve()
                        }
                    });
                }
            )
        };
    
        function borrarTutorColectivo(data) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("borrarTutorColectivo",
                        data._id,
                            (err, res) => {
                                if (err) {
                                    alert("Error al borrar al Tutor del Colectivo")
                                    reject()
                                } else {
                                    alert("Se borró al Tutor del Colectivo")
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
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellido", field: "apellido" },
                    { title: "Correo Electrónico", field: "correoElectronico" },
                    { title: "FechaNacimiento", field: "fechaNacimiento", type: "date" },
                    { title: "direccion", field: "direccion" },
                    { title: "telefono", field: "telefono" },
                    { title: "telefono Inteligente", field: "telefonoInteligente", type: "boolean" },
                    { title: "INE", field: "curp" }
                ]
            }
            data={tutoresColectivo}
            editable={{
                onRowAdd: addTutorColectivo,
                onRowUpdate: editTutorColectivo,
                onRowDelete: borrarTutorColectivo
            }}
        />
    );
}

export default withTracker(() => {
    return {
        tutoresColectivo: TutoresColectivo.find({}).fetch(),
    };
})(TablaTutorColectivo);