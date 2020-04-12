import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Pacientes } from "../../api/pacientes/pacientes"

function TablaPacientes({pacientes}) {
    
    
    function addPaciente(newData) {
        Meteor.call("crearPaciente",
            newData.nombre, newData.apellido, new Date(), newData.direccion, newData.telefono, newData.telefonoInteligente,
         (err, res) => {
             if (err) {
                 alert("Error al crear al paciente")
             } else {
                 alert("Se creo el paciente correctamente")
                    }
                });
        
     };
    function editPaciente(newData) {
        Meteor.call("editarPaciente",
            newData._id, newData.nombre, newData.apellido, new Date(), newData.direccion, newData.telefono, newData.telefonoInteligente,
            (err, res) => {
                if (err) {
                    alert("Error al editar al paciente")
                } else {
                    alert("Se edito el paciente correctamente")
                }
            });
    };
    
    function borrarPaciente(data) {
        Meteor.call("borrarPaciente",
           data._id,
            (err, res) => {
                if (err) {
                    alert("Error al borrar al paciente")
                } else {
                    alert("Se borro el paciente correctamente")
                }
            });
     };


    return (

        <MaterialTable
            title="Pacientes"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellido", field: "apellido" },
                    { title: "direccion", field: "direccion" },
                    { title: "telefono", field: "telefono" },
                    { title: "telefono Inteligente", field: "telefonoInteligente" },
                    
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