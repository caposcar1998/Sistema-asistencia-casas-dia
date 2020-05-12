import React from 'react';
import MenuGeneralAdministrador from '../menus/MenuGeneralAdministrador'
import BeneficiosTab from '../tabs/BeneficiosTab';



export default function AdministradorPage(props) {
   

    return (
        <div>
            <MenuGeneralAdministrador />
            {props.content}
        </div>
    );
}