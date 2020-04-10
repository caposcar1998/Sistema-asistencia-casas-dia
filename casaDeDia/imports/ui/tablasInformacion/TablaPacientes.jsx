import React from 'react';
import MaterialTable from 'material-table';

export default function TablaPacientes() {
    
    return (

        <MaterialTable
            title="Pacientes"
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellido", field: "apellido" },
                    { title: "fechaNacimiento", field: "fechaNacimiento" },
                    { title: "direccion", field: "direccion" },
                    { title: "telefono", field: "telefono" },
                    { title: "telefonoInteligente", field: "telefonoInteligente" },
                    
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