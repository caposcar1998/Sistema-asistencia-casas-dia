import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { AdultosMayores } from "../../api/adultosMayores/adultosMayores";


function TablaAdultoMayor({adultosMayores}) {


    function addAdultoMayor(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("crearAdultoMayor",
                    newData.nombre,newData.apellidos,newData.curp,newData.sexo,newData.edad, newData.grupoSanguineo, newData.direccion,newData.codigoPostal,newData.apodo, newData.contrasena,
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
    function editAdultoMayor(newData) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarAdultoMayor",
                    newData._id, newData.nombre,newData.apellidos,newData.curp,newData.sexo,newData.edad, newData.grupoSanguineo, newData.direccion,newData.codigoPostal,newData.apodo, newData.contrasena,
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

    function borrarAdultoMayor(data) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarAdultoMayor",
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
            title="Adultos Mayores"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre Completo", field: "nombre" },
                    { title: "Apellidos", field: "apellidos" },
                    { title: "CURP", field: "curp" },
                    { title: "Sexo", field: "sexo" },
                    { title: "Edad", field: "edad", type:"numeric" },
                    { title: "Grupo Sanguineo", field: "grupoSanguineo" },
                    { title: "Dirección", field: "direccion" },
                    { title: "C.P.", field: "codigoPostal" },
                    { title: "apodo", field: "apodo"},
                    { title: "contrasena", field: "contrasena"}

                ]
            }
            data={adultosMayores}
            editable={{
                onRowAdd: addAdultoMayor,
                onRowUpdate: editAdultoMayor,
                onRowDelete: borrarAdultoMayor
            }}
        />
    );
}


export default withTracker(() => {
    return {
        adultosMayores: AdultosMayores.find({}).fetch(),
    };
})(TablaAdultoMayor);