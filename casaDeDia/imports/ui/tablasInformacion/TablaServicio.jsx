import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Servicios } from "../../api/servicios/servicios";
import { Meteor } from 'meteor/meteor';


function TablaServicio({servicios}) {


    function addServicio(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearServicio",
                    newData.nombre,newData.tipoServicio,newData.telefono,newData.direccion,newData.vigente, newData.redSocial1, newData.redSocial2,newData.redSocial3,newData.fechaRegistro,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            resolve()
                        }
                    });

            }

        )

    };
    function editServicio(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarServicio",
                    newData._id, newData.nombre,newData.tipoServicio,newData.telefono,newData.direccion,newData.vigente, newData.redSocial1, newData.redSocial2,newData.redSocial3,newData.fechaRegistro,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            resolve()
                        }
                    });
            }

        )
    };

    function borrarServicio(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarServicio",
                    data._id,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            resolve()
                        }
                    });
            }
        )
    };

    return (

        <MaterialTable
            title="Servicios"
            icons={tableIcons}
            columns={
                [
                    { title: "Tipo de Servicio", field: "tipoServicio" },
                    { title: "Nombre", field: "nombre" },
                    { title: "Telefono", field: "telefono" },
                    { title: "Dirección", field: "direccion" },
                    { title: "Fecha de Registro", field: "fechaRegistro", type:"datetime" },
                    { title: "Vigente", field: "vigente", type:"boolean" },
                    { title: "Red Social 1", field: "redSocial1" },
                    { title: "Red Social 2", field: "redSocial2" },
                    { title: "Red Social 3", field: "redSocial3" }
                ]
            }
            data={servicios}
            editable={{
                onRowAdd: addServicio,
                onRowUpdate: editServicio,
                onRowDelete: borrarServicio
            }}
        />
    );
}


export default withTracker(() => {
    Meteor.subscribe("servicios");
    return {
        servicios: Servicios.find({}).fetch(),
    };
})(TablaServicio);