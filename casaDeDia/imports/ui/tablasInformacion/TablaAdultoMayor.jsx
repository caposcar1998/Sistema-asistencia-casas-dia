import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { AdultosMayores } from "../../api/adultosMayores/adultosMayores";


function TablaAdultoMayor({adultosMayores}) {


    function addAdultoMayor(newData) {
        val = validations(newData);

        if(val == true) {
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
        }else {
            location.reload();
        }

    };

    


    function editAdultoMayor(newData) {
        val = validations(newData);

        if(val == true) {
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
        }else {
            location.reload();
        }
    };

    function validations(newData) {
        var sexo = /^[MF]+$/;
        var grupoSanguineo = /^[ABO+-]+$/;
        var letters = /^[A-Za-z]+$/;
        
        if (newData.nombre == null || newData.apellidos == null || newData.curp == null || newData.sexo == null || 
            newData.edad == null || newData.grupoSanguineo == null || newData.direccion == null|| 
            newData.codigoPostal == null || newData.apodo == null ||  newData.contrasena == null) {
            window.alert("No se llenaron todos los campos, intete de nuevo.");
            return validation = false;
        }else if(newData.curp.toString().length > 18 || newData.curp.toString().length < 18) {
            window.alert("El CURP no es válido, verifique que sean 18 caracteres e intente de nuevo. ");
            return validation = false;
        }else if(letters.test(newData.nombre)== false || letters.test(newData.apellido)== false) {
            window.alert("El nombre y/o apellidos no deben de contener números, intente de nuevo.");
            return validation = false;
        }else if(sexo.test(newData.sexo)== false || newData.sexo.toString().length > 1) {
            window.alert("El sexo solo debe ser M o F y tiene que ser un solo caracter, intente de nuevo.");
            return validation = false;
        }else if(grupoSanguineo.test(newData.grupoSanguineo)== false || newData.grupoSanguineo.toString().length > 3) {
            window.alert("El grupo sanguineo no es válido,verifique que sean mayúsculas y que no sean más de tres caracteres; intente de nuevo.");
            return validation = false;
        }else if(newData.codigoPostal.toString().length > 5 || newData.codigoPostal.toString().length < 5) {
            window.alert("El código postal debe de contener 5 dígitos, intente de nuevo.");
            return validation = false;
        }
        else {
            window.alert("¡Nuevo adulto mayor registrado!");
            console.log(typeof(newData.nombre));
            return validation = true;
        }
    
}

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
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellidos", field: "apellidos" },
                    { title: "CURP", field: "curp" },
                    { title: "Sexo", field: "sexo" },
                    { title: "Edad", field: "edad", type:"numeric" },
                    { title: "Grupo Sanguineo", field: "grupoSanguineo" },
                    { title: "Dirección", field: "direccion" },
                    { title: "C.P.", field: "codigoPostal", type: "numeric" },
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