import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({

}));


export default function LugaresCercanos({codigoPostal}) {
    const classes = useStyles();
    const [casasDia, setCasasDia] = useState([]);
    const [asilos, setAsilos] = useState([]);
    const [clubes, setClubes] = useState([]);

    useEffect(() => {
        encontrarCasasDeDiaServidor();
        encontrarAsilosServidor();
        encontrarClubesServidor();
    }, []);

    function encontrarCasasDeDiaServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("casasDiaPorCodigo",
                    codigoPostal,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setCasasDia(res)
                            resolve()
                        }
                    });
            }
        )
     }
    
    function encontrarAsilosServidor() {
        return new Promise(
            (resolve, reject) => {
                codigoPostal,
                Meteor.call("asilosPorCodigo",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setAsilos(res)
                            resolve()
                        }
                    });
            }
        )
     }

    function encontrarClubesServidor() {
        return new Promise(
            (resolve, reject) => {
                codigoPostal,
                Meteor.call("clubesPorCodigo",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setClubes(res)
                            resolve()
                        }
                    });
            }
        )
     }

    return (<>{codigoPostal}</>)
 }