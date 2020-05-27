import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Centros } from "../../api/centros/centros"
import { Meteor } from 'meteor/meteor';

function TablaCentros({centros}) {
    
    
    function addCentro(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearCentro",
                    newData.calle, newData.delegacion, newData.codigoPostal, newData.numeroTelefonico,
                    (err, res) => {
                        if (err) {
                            alert("Error al crear el centro")
                            reject()
                        } else {
                            alert("Se creo el centro correctamente")
                            resolve()
                        }
                    });
                
            }
        
          )
        
     };
    function editCentro(newData) {
        return new Promise(
            (resolve, reject) => {
        Meteor.call("editarCentro",
            newData._id, newData.calle, newData.delegacion, newData.codigoPostal, newData.numeroTelefonico,
            (err, res) => {
                if (err) {
                    alert("Error al editar el centro")
                    reject()
                } else {
                    alert("Se editó el centro correctamente")
                    resolve()
                }
            });
            }

        )
    };
    
        function borrarCentro(data) {
            return new Promise(
                (resolve, reject) => {
        Meteor.call("borrarCentro",
           data._id,
            (err, res) => {
                if (err) {
                    alert("Error al borrar el centro")
                    reject()
                } else {
                    alert("Se borro el centro")
                    resolve()
                }
            });
                }

            )
     };


    return (

        <MaterialTable
            title="Centros"
            icons={tableIcons}
            columns={
                [
                    { title: "id Centro", field: "_id" },
                    { title: "Calle", field: "calle" },
                    { title: "Delegacion", field: "delegacion"},
                    { title: "CodigoPostal", field: "codigoPostal"},
                    { title: "Numero Telefonico", field: "numeroTelefonico" }
                ]
            }
            data={centros}
            editable={{
                onRowAdd: addCentro,
                onRowUpdate: editCentro,
                onRowDelete: borrarCentro
            }}
        />

    );
}

export default withTracker(() => {
    Meteor.subscribe("centros");
    return {
        centros: Centros.find({}).fetch(),
    };
})(TablaCentros);