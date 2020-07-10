import React, { useEffect, useState } from "react";



export default function CasasDeDiaUsuario({ casaSeleccionada }) {
    const [casasDeDia, setCasasDeDia] = useState([]);

    useEffect(() => {
        casasDeDiaServidor();
    }, []);


    function casasDeDiaServidor() {
        console.log("entra")
        return new Promise(
            (resolve, reject) => {
                Meteor.call("encontrarCasaDeDia",
                    casaSeleccionada,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            console.log(res)
                            setCasasDeDia(res)
                            resolve()
                        }
                    });
            }
        )
    }




    return (
        <div>{casasDeDia.nombre}</div>
    )

}