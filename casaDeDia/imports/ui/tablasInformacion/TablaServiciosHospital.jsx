import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { ServiciosHospital } from '../../api/serviciosHospital/serviciosHospital';
import { Meteor } from 'meteor/meteor';



function TablaServiciosHospital({ serviciosHospital }) {


    function addServiciosHospital(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearServicioHospital",
                    newData.nombre, newData.vigencia, newData.descripcion, newData.laboratorio, newData.nombreInstitucion, newData.direccion, newData.codigoPostal, newData.tipoInstitucion,
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
    function editServiciosHospital(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarServicioHospital",
                    newData._id, newData.nombre, newData.vigencia, newData.descripcion, newData.laboratorio, newData.nombreInstitucion, newData.direccion, newData.codigoPostal, newData.tipoInstitucion,
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

    function borrarServiciosHospital(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarServicioHospital",
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
            title="Servicios de Hospital"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Vigencia", field: "vigencia", type: "datetime" },
                    { title: "Descripción", field: "descripcion" },
                    { title: "Laboratorio", field: "laboratorio" },
                    { title: "Nombre Institución", field: "nombreInstitucion" },
                    { title: "Dirección", field: "direccion" },
                    { title: "Codigo postal", field: "codigoPostal" },
                    { title: "Privado", field: "tipoInstitucion", type:"boolean" },
                ]
            }
            data={serviciosHospital}
            editable={{
                onRowAdd: addServiciosHospital,
                onRowUpdate: editServiciosHospital,
                onRowDelete: borrarServiciosHospital
            }}
        />
    );
}


export default withTracker(() => {
    Meteor.subscribe("serviciosHospital");
    return {
        serviciosHospital: ServiciosHospital.find({}).fetch(),
    };
})(TablaServiciosHospital);


