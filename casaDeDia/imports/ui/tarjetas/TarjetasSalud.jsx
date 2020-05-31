import React from 'react';
import MaterialTable from 'material-table';
import { withTracker } from 'meteor/react-meteor-data';
import { Usuarios } from "../../api/usuarios/usuarios";
import { Meteor } from 'meteor/meteor';
import { tableIcons } from '../../utilities/TableIcons';


function TarjetasSalud({ administradores }) {



    return (

        <MaterialTable
            title="Tarjetas Salud"
            icons={tableIcons}
            columns={
                [
                    { title: "Nombre beneficiado", field: "beneficiado" },
                    { title: "Numero de tarjeta", field: "numeroTarjeta" },
                    { title: "Fecha vigencia", field: "fechaVigencia" },
                    { title: "Hospital", field: "hospital" },
                    { title: "Numero paciente", field: "noPaciente" },
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
})(TarjetasSalud);


