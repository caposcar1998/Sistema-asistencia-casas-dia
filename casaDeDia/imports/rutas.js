import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from "../imports/ui/App"
import AdministradorPage from "../imports/ui/layoutsGenerales/AdministradorPage"


FlowRouter.route('/Administrador', {
    name: 'AdministradorPage',
    action() {
        mount( {
            content: <AdministradorPage />
        })
    }
})

