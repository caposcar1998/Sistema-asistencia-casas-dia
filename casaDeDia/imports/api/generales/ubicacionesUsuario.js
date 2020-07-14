import { Meteor } from 'meteor/meteor';
import { CasasDeDia } from '../casasDeDia/casasDeDia';
import { Asilos } from '../asilos/asilos';
import { Clubes } from '../clubes/clubes';
import { Colectivos } from '../colectivos/colectivos';


Meteor.methods({

    "encontrarLugar"(idCasaDeDia) {
        if (CasasDeDia.findOne({ _id: idCasaDeDia }) != null) {
            return CasasDeDia.findOne({ _id: idCasaDeDia });
        }
        else if (Asilos.findOne({ _id: idCasaDeDia }) != null) {
            return Asilos.findOne({ _id: idCasaDeDia });
        }
        else if (Clubes.findOne({ _id: idCasaDeDia }) != null) {
            return Clubes.findOne({ _id: idCasaDeDia });
        }
        else {
            return Colectivos.findOne({ _id: idCasaDeDia });
        }
    }


})