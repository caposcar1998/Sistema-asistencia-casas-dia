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
                    newData.nombre, new Date(), new Date(), newData.descripcion, newData.direccion, newData.telefono, newData.acumulable, newData.restricciones,
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
                    newData._id, newData.nombre, new Date(), new Date(), newData.descripcion, newData.direccion, newData.telefono, newData.acumulable, newData.restricciones,
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
                    { title: "Nombre", field: "nombre" },
                    { title: "telefono", field: "telefono" },
                    { title: "Descripcion", field: "descripcion" },
                    { title: "Direccion", field: "direccion" },
                    { title: "Acumulable", field: "acumulable" },
                    { title: "Restricciones", field: "restricciones" },

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


