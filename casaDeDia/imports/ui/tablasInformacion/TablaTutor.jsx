import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { tableIcons } from "../../utilities/TableIcons";
import { Tutores } from "../../api/tutores/tutores";
import CryptoJS from "react-native-crypto-js";

import { Meteor } from 'meteor/meteor';

function TablaTutor({tutores}) {
    const d = (tutores) => tutores.map((tutor) =>{
        // Decrypt
        let bytes  = CryptoJS.AES.decrypt(tutor.nombre, 'secret key 123');
        let nombre_tutor = bytes.toString(CryptoJS.enc.Utf8);
        let bytes2  = CryptoJS.AES.decrypt(tutor.apellido, 'secret key 123');
        let apellidos_tutor = bytes2.toString(CryptoJS.enc.Utf8);
        let bytes3  = CryptoJS.AES.decrypt(tutor.direccion, 'secret key 123');
        let direccion_tutor = bytes3.toString(CryptoJS.enc.Utf8);
        let bytes4  = CryptoJS.AES.decrypt(tutor.contrasena, 'secret key 123');
        let contrsaena_tutor = bytes4.toString(CryptoJS.enc.Utf8);
        let bytes5  = CryptoJS.AES.decrypt(tutor.curp, 'secret key 123');
        let curp_tutor = bytes5.toString(CryptoJS.enc.Utf8);
        return({
            _id:tutor._id,
            nombre:nombre_tutor,
            apellido:apellidos_tutor,
            fechaNacimiento:tutor.fechaNacimiento,
            direccion:direccion_tutor,
            telefono:tutor.telefono,
            telefonoInteligente:tutor.telefonoInteligente, 
            curp :curp_tutor,
            apodo:tutor.apodo,
            contrasena:contrsaena_tutor,
            idUsuario:tutor.idUsuario,
            visualizarTalleres:tutor.visualizarTalleres,
            visualizarConvocatorias:tutor.visualizarConvocatorias,
            visualizarCentros:tutor.visualizarCentros,
            visualizarColectivos:tutor.visualizarColectivos,
            visualizarTutores:tutor.visualizarTutores,
            editarTutores:tutor.editarTutores
    
        });
    });

        function addTutor(newData) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("crearTutor",
                        newData.nombre, newData.apellido, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente, newData.curp, newData.apodo,newData.contrasena,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos,newData.visualizarTutores,newData.editarTutores,
                        (err, res) => {
                            if (err) {
                                alert("Error al Crear Al Tutor para Futuro Colectivo.")
                                reject()
                            } else {
                                alert("Se Creó el Tutor para Colectivo con Éxito.")
                                resolve()
                            }
                    });
                }
            )
        };

        function editTutor(newData) {
            return new Promise(
                (resolve, reject) => {
                Meteor.call("editarTutor",
                    newData._id, newData.nombre, newData.apellido, newData.fechaNacimiento, newData.direccion, newData.telefono, newData.telefonoInteligente, newData.curp,newData.apodo,newData.contrasena,newData.idUsuario,newData.visualizarTalleres,newData.visualizarConvocatorias,newData.visualizarCentros,newData.visualizarColectivos,newData.visualizarTutores,newData.editarTutores,
                    (err, res) => {
                        if (err) {
                            alert("Error al Editar al Tutor para Colectivo.")
                            reject()
                        } else {
                            alert("Se Editó el Tutor para Colectivo con Éxito.")
                            resolve()
                        }
                    });
                }
            )
        };
    
        function borrarTutor(data) {
            return new Promise(
                (resolve, reject) => {
                    Meteor.call("borrarTutor",
                        data._id,
                            (err, res) => {
                                if (err) {
                                    alert("Error al borrar al Tutor del Colectivo")
                                    reject()
                                } else {
                                    alert("Se borró al Tutor del Colectivo.")
                                    resolve()
                                }
                            });
                     }
            )
        };

        if(Meteor.user() && Meteor.user().profile.editarTutores !== true){
            return (
    
                <MaterialTable
                    title="Tutores"
                    icons={tableIcons}
                    columns={
                        [
                            { title: "Nombre", field: "nombre" },
                            { title: "Apellido", field: "apellido" },
                            { title: "FechaNacimiento", field: "fechaNacimiento", type: "date" },
                            { title: "direccion", field: "direccion" },
                            { title: "telefono", field: "telefono" },
                            { title: "curp", field: "curp" },
                        ]
                    }
                    data={d(tutores)}
                />
            );
        }

    return (
        <MaterialTable
            title="Tutores Colectivo"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre", field: "nombre" },
                    { title: "Apellido", field: "apellido" },
                    { title: "FechaNacimiento", field: "fechaNacimiento", type: "date" },
                    { title: "direccion", field: "direccion" },
                    { title: "telefono", field: "telefono" },
                    { title: "telefono Inteligente", field: "telefonoInteligente", type: "boolean" },
                    { title: "INE", field: "curp" },
                    { title: "Username(Id)", field: "apodo" },
                    { title: "contrasena", field: "contrasena" },
                    { title: "Visualizar Talleres", field: "visualizarTalleres", type:'boolean' },
                    { title: "Visualizar Colectivos", field: "visualizarColectivos" , type:'boolean'},
                    { title: "Visualizar Centros", field: "visualizarCentros", type:'boolean' },
                    { title: "Visualizar Convocatorias", field: "visualizarConvocatorias" , type:'boolean'},
                    { title: "Visualizar Tutores", field: "visualizarTutores" , type:'boolean'},
                    { title: "Editar Tutores", field: "editarTutores", type:'boolean' }
                ]
            }
            data={d(tutores)}
            editable={{
                onRowAdd: addTutor,
                onRowUpdate: editTutor,
                onRowDelete: borrarTutor
            }}
        />
    );
}

export default withTracker(() => {
    Meteor.subscribe("tutores");
    return {
        tutores: Tutores.find({}).fetch(),
    };
})(TablaTutor);