
import React from "react";

import ContenidoMenuGeneral from "./ContenidoMenuGeneral";

import { Voluntarios } from "../../api/voluntarios/voluntarios";
import { Empleados } from "../../api/empleados/empleados";
import { Instructores } from "../../api/instructores/instructores";

import { Meteor } from 'meteor/meteor';


export default function MenuGeneralAdministrador() {

  function handleCambioPagina(ruta) {
    FlowRouter.go(ruta)
   };

  return (
    <ContenidoMenuGeneral handleCambioPagina={handleCambioPagina}/>
  )
}

