
import React from "react";

import ContenidoMenuGeneral from "./ContenidoMenuGeneral";


export default function MenuGeneralAdministrador() {

  function handleCambioPagina(ruta) {
    FlowRouter.go(ruta)
   };

  return (
    <ContenidoMenuGeneral handleCambioPagina={handleCambioPagina}/>
  )
}
