import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Talleres } from "../../api/talleres/talleres";

import { Meteor } from 'meteor/meteor';


function TablaTaller({talleres}) {


    function addTaller(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearTaller",
                    newData.cupo,newData.nombre,newData.instructor,newData.colectivo,
                    (err, res) => {
                        if (err) {
                            alert("Error al crear taller, instructor erroneo")
                            reject()                           
                        } else {
                            alert("Exito crear taller")
                            resolve()    
                        }
                    });

            }

        )

    };
    function editTaller(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarTaller",
                    newData._id, newData.cupo,newData.nombre,newData.instructor,newData.colectivo,
                    (err, res) => {
                        if (err) {
                            alert("Error al editar taller")
                            reject()
                        } else {
                            alert("Exito editar taller")
                            resolve()
                        }
                    });
            }

        )
    };

    function borrarTaller(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarTaller",
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
            title="Talleres"
            icons={tableIcons}
            columns={
                [
                    
                    { title: "Cupo en el Taller", field: "cupo" },
                    { title: "Nombre", field: "nombre" },
                    { title: "ID Instructor encargado", field: "instructor" },
                    { title: "ID Colectivo", field: "colectivo" },
                    
                ]
            }
            data={talleres}
            editable={{
                onRowAdd: addTaller,
                onRowUpdate: editTaller,
                onRowDelete: borrarTaller
            }}
        />
    );
}


export default withTracker(() => {
    Meteor.subscribe("talleres");
    return {
        talleres: Talleres.find({}).fetch(),
    };
})(TablaTaller);