// Importamos las constantes de las acciones
import { CONSTANTS } from '../actions';

// Creamos una variable para la creación de ID, ya que no usamos un generador de ID
let listID = 2;

const initialState = [
    {
        id: 0,
        title: "Primer List de Card",
        cards: [
            {
                id: 0,
                text: "Primer cards",
            },
            {
                id:1,
                text: "Segunda card de prueba"
            }
        ]
    },
    {
        id: 1,
        title: "Segunda List de Card",
        cards: [
            {
                id: 0,
                text: "Primer cards",
            },
            {
                id:1,
                text: "Segunda card de prueba"
            },
            {
                id:3,
                text: "Tercera card de prueba"
            }
        ]
    }
]

const listReducer = (state, action) => {
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                id: listID,
                title: action.payload.title,
                cards: [] 
            }
            listID++;
            return [...state, newList]
            break;
        case CONSTANTS.ADD_CARD:
            const newCard = {

            };
            break;
        default:
            return initialState;
    }
};

export default listReducer;