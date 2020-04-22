import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Promociones } from '../../api/promociones/promociones';




function TablaPromociones({ promociones }) {


    function addPromocion(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearPromocion",
                    newData.nombre, newData.fechaInicio, newData.fechaFinal, newData.descripcion, newData.direccion, newData.telefono, newData.acumulable, newData.restricciones, newData.caducidad,
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
    function editPromocion(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarPromocion",
                    newData._id, newData.nombre, newData.fechaInicio, newData.fechaFinal, newData.descripcion, newData.direccion, newData.telefono, newData.acumulable, newData.restricciones, newData.caducidad,
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

    function borrarPromocion(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarPromocion",
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
            title="Promociones"
            icons={tableIcons}
            columns={
                [
                    { title: "Establecimiento", field: "nombre" },
                    { title: "Telefono", field: "telefono"},
                    { title: "Descripcion", field: "descripcion" },
                    { title: "Direccion", field: "direccion" },
                    { title: "Restricciones", field: "restricciones" },
                    { title: "Fecha Inicio", field: "fechaInicio", type: "date" },
                    { title: "Fecha Final", field: "fechaFinal", type: "date" },
                    { title: "Acumulable", field: "acumulable", type: "boolean" },
                    { title: "Caduca", field: "caducidad", type: "boolean" },

                ]
            }
            data={promociones}
            editable={{
                onRowAdd: addPromocion,
                onRowUpdate: editPromocion,
                onRowDelete: borrarPromocion
            }}
        />

    );
}
export default withTracker(() => {
    return {
        promociones: Promociones.find({}).fetch(),
    };
})(TablaPromociones);


