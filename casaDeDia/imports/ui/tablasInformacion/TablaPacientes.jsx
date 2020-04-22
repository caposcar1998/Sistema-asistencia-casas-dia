import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Pacientes } from "../../api/pacientes/pacientes"

function TablaPacientes({pacientes}) {
    
    
    function addPaciente(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearPaciente",
                    newData.nombre, newData.apellido, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente,
                    (err, res) => {
                        if (err) {
                            alert("Error al crear al paciente")
                            reject()
                        } else {
                            alert("Se creo el paciente correctamente")
                            resolve()
                        }
                    });
                
            }
        
          )
        
     };
    function editPaciente(newData) {
        return new Promise(
            (resolve, reject) => {
        Meteor.call("editarPaciente",
            newData._id, newData.nombre, newData.apellido, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente,
            (err, res) => {
                if (err) {
                    alert("Error al editar al paciente")
                    reject()
                } else {
                    alert("Se edito el paciente correctamente")
                    resolve()
                }
            });
            }

        )
    };
    
        function borrarPaciente(data) {
            return new Promise(
                (resolve, reject) => {
        Meteor.call("borrarPaciente",
           data._id,
            (err, res) => {
                if (err) {
                    alert("Error al borrar al paciente")
                    reject()
                } else {
                    alert("Se borro al paciente con exito")
                    resolve()
                }
            });
                }

            )

     };


    return (

        <MaterialTable
            title="Pacientes"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellido", field: "apellido" },
                    { title: "FechaNacimiento", field: "fechaNacimiento", type: "date" },
                    { title: "direccion", field: "direccion" },
                    { title: "telefono", field: "telefono" },
                    { title: "telefono Inteligente", field: "telefonoInteligente", type: "boolean" },
                    
                ]
            }
            data={pacientes}
            editable={{
                onRowAdd: addPaciente,
                onRowUpdate: editPaciente,
                onRowDelete: borrarPaciente
            }}
        />

    );
}

export default withTracker(() => {
    return {
        pacientes: Pacientes.find({}).fetch(),
    };
})(TablaPacientes);