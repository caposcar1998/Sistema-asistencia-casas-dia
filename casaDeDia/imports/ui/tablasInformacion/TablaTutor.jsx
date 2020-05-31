import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Tutores } from "../../api/tutores/tutores";

import { Meteor } from 'meteor/meteor';

function TablaTutor({tutores}) {
        function addTutor(newData) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("crearTutor",
                        newData.nombre, newData.apellido, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente, newData.curp, newData.apodo,newData.contrasena,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos,newData.visualizarTutores,newData.editarTutores,
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
                    newData._id, newData.nombre, newData.apellido, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente, newData.curp,newData.apodo,newData.contrasena,newData.idUsuario,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos,newData.visualizarTutores,newData.editarTutores,
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

        if(Meteor.user() && Meteor.user().profile.editarTutores !== true){
            return (
    
                <MaterialTable
                    title="Tutores"
                    icons={tableIcons}
                    columns={
                        [
                            { title: "Nombre", field: "nombre" },
                            { title: "Apellido", field: "apellido" },
                            { title: "FechaNacimiento", field: "fechaNacimiento", type: "date" },
                            { title: "direccion", field: "direccion" },
                            { title: "telefono", field: "telefono" },
                            { title: "curp", field: "curp" },
                        ]
                    }
                    data={tutores}
                />
            );
        }

    return (
        <MaterialTable
            title="Tutores Colectivo"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellido", field: "apellido" },
                    { title: "FechaNacimiento", field: "fechaNacimiento", type: "date" },
                    { title: "direccion", field: "direccion" },
                    { title: "telefono", field: "telefono" },
                    { title: "telefono Inteligente", field: "telefonoInteligente", type: "boolean" },
                    { title: "curp", field: "curp" },
                    { title: "apodo", field: "apodo" },
                    { title: "contrasena", field: "contrasena" },
                    { title: "Visualizar Talleres", field: "visualizarTalleres", type:'boolean' },
                    { title: "Visualizar Colectivos", field: "visualizarColectivos" , type:'boolean'},
                    { title: "Visualizar Centros", field: "visualizarCentros", type:'boolean' },
                    { title: "Visualizar Convocatorias", field: "visualizarConvocatorias" , type:'boolean'},
                    { title: "Visualizar Tutores", field: "visualizarTutores" , type:'boolean'},
                    { title: "Editar Tutores", field: "editarTutores", type:'boolean' }
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
    Meteor.subscribe("tutores");
    return {
        tutores: Tutores.find({}).fetch(),
    };
})(TablaTutor);