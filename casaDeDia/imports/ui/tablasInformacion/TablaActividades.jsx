import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Actividades } from '../../api/actividades/actividades';
import { Meteor } from 'meteor/meteor';



function TablaActividades({ actividades }) {


    function addActividades(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearActividad",
                    newData.nombre, newData.fechaInicio, newData.fechaFinal, newData.hora, newData.descripcion, newData.direccion, newData.codigoPostal,
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
    function editActividades(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarActividad",
                    newData._id, newData.nombre, newData.fechaInicio, newData.fechaFinal, newData.hora, newData.descripcion, newData.direccion, newData.codigoPostal,
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

    function borrarActividades(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarActividad",
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
            title="Actividades"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Fecha inicio", field: "fechaInicio", type: "datetime" },
                    { title: "Fecha iinal", field: "fechaFinal", type: "datetime" },
                    { title: "Hora", field: "hora", type: "time" },
                    { title: "Descripción", field: "descripcion" },
                    { title: "Dirección", field: "direccion" },
                    { title: "Código postal", field: "codigoPostal"}
                ]
            }
            data={actividades}
            editable={{
                onRowAdd: addActividades,
                onRowUpdate: editActividades,
                onRowDelete: borrarActividades
            }}
        />
    );
}


export default withTracker(() => {
    Meteor.subscribe("actividades");
    return {
        actividades: Actividades.find({}).fetch(),
    };
})(TablaActividades);