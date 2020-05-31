import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Pacientes } from "../../api/pacientes/pacientes"

function TablaPacientes({pacientes}) {
    
    
    function addPaciente(newData) {
        val = validations(newData);

        if(val == true) {
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
        }else {
            location.reload();
        }
        
     };

     function validations(newData) {
        var letters = /^[A-Za-záéíóú]+$/;
        
        if (newData.nombre == null || newData.apellido == null || newData.direccion == null || newData.telefono == null) {
            window.alert("No se llenaron todos los campos, intete de nuevo.");
            return validation = false;
        }else if(letters.test(newData.nombre)== false || letters.test(newData.apellido)== false) {
            window.alert("El nombre y/o apellidos no deben de contener números, intente de nuevo.");
            return validation = false;
        }else if(newData.telefono.toString().length > 10) {
            window.alert("El número no puede exceder de 10 digitos")
        }
        else {
            return validation = true;
        }
    
}


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
                    { title: "telefono", field: "telefono", type: "numeric" },
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