import React, { useState} from 'react';
import MaterialTable from 'material-table';

export default function TablaPacientes() {
    const [getPacientes, setPacientes] = useState();


    function addPaciente() { };
    function editPaciente() { };
    function borrarPaciente() { };


    return (

        <MaterialTable
            title="Pacientes"
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellido", field: "apellido" },
                    { title: "fecha de nacimiento", field: "fechaNacimiento" },
                    { title: "direccion", field: "direccion" },
                    { title: "telefono", field: "telefono" },
                    { title: "telefono Inteligente", field: "telefonoInteligente" },
                    
                ]
            }
            data={getPacientes}
            editable={{
                onRowAdd: addPaciente,
                onRowUpdate: editPaciente,
                onRowDelete: borrarPaciente
            }}
        />

    );
}