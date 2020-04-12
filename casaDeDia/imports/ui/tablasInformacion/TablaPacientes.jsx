import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Pacientes } from "../../api/pacientes/pacientes"

function TablaPacientes({pacientes}) {
    const [getPacientes, setPacientes] = useState();


    function addPaciente() {
        Meteor.call("crearPaciente",
            "manuel", "ortiz", new Date(), "Valle", 5655, false,
         (err, res) => {
             if (err) {
                 console.log(err)
             } else {
                    console.log(res)
                    }
                });
        
     };
    function editPaciente() {
        console.log("editar");
     };
    function borrarPaciente() {
        console.log("borrar");
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