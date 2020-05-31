
import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Tarjetas } from '../../api/tarjetas/tarjetas';
import { Meteor } from 'meteor/meteor';


function TablaTarjeta({tarjetas}) { 


    function addTarjeta(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearTarjeta",
                    newData.beneficiado, newData.numeroTarjeta, newData.fechaVigencia, newData.tipo,
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
    function editTarjeta(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarTarjeta",
                    newData._id, newData.beneficiado, newData.numeroTarjeta, newData.fechaVigencia, newData.tipo,
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

    function borrarTarjeta(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarTarjeta",
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
            title="Tarjetas"
            icons={tableIcons}
            columns={
                [
                    { title: "Beneficiado", field: "beneficiado" },
                    { title: "Numero tarjeta", field: "numeroTarjeta" },
                    { title: "fecha Vigencia", field: "fechaVigencia", type:"date" },
                    { title: "Tipo", field: "tipo" }
                ]
            }
            data={tarjetas}
            editable={{
                onRowAdd: addTarjeta,
                onRowUpdate: editTarjeta,
                onRowDelete: borrarTarjeta
            }}
        />
    )

}

export default withTracker(() => {
    Meteor.subscribe("tarjetas");
    return {
        tarjetas: Tarjetas.find({}).fetch(),
    };
})(TablaTarjeta);