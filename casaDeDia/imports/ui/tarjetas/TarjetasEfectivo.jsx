import React from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { Usuarios } from "../../api/usuarios/usuarios";
import { Meteor } from 'meteor/meteor';
import { tableIcons } from '../../utilities/TableIcons';


function TarjetasEfectivo({ administradores }) {



    return (

        <MaterialTable
            title="Tarjetas Salud"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre beneficiado", field: "nombre" },
                    { title: "Tipo de tarjeta", field: "tipoTarjeta" },
                    { title: "Numero Tarjeta", field: "numeroTarjeta" },
                    { title: "Cantidad", field: "cantidad" },
                    { title: "Banco", field: "banco" },
                    { title: "curp", field: "curp" },
                ]
            }
            data={administradores}

        />
    );
}


export default withTracker(() => {
    Meteor.subscribe("usuarios");
    return {
        administradores: Usuarios.find({}).fetch(),
    };
})(TarjetasEfectivo);