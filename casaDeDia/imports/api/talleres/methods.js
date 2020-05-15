import { Meteor } from 'meteor/meteor';
import { Talleres } from "../talleres/talleres";
import{Instructores} from "../instructores/instructores";
import{Colectivos} from "../colectivos/colectivos";


Meteor.methods({


    "crearTaller"(cupo,nombre,instructor,colectivo) {

        
        const inst = Instructores.findOne({
            "_id": instructor
        })

        const colec = Colectivos.findOne({
            "_id": colectivo
        })


        if (inst.nombre == null) { 
            throw new Meteor.Error(instructor);
        }

        else if(colec.nombre == null) { 
            throw new Meteor.Error(colectivo);
        }
        
        else{

            Talleres.insert(
                {          
                    cupo: cupo,
                    nombre: nombre,
                    instructor: instructor,
                    colectivo: colectivo 
                }
    
            )   

        }
        

    },

    "editarTaller"(idTaller,cupo,nombre,instructor,colectivo) {
        Talleres.update(
            {_id: idTaller},
            {
                $set:
                {
                    cupo: cupo,
                    nombre: nombre,
                    instructor: instructor,
                    colectivo: colectivo,
                }
            }
        )
    },

    "borrarTaller"(idAdultoMayor) {
        Talleres.remove(
            {
                "_id": idTaller
            }
        )
    },

    "leerTaller"() {
        return Talleres.find().fetch();
    }


});