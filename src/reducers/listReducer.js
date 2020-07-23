// Importamos un generador ID
import nextId from "react-id-generator";

// Importamos las constantes de las acciones
import { CONSTANTS } from '../actions';

const initialState = [
    {
        id: nextId(),
        title: "Primer List de Card",
        cards: [
            {
                id: nextId(),
                text: "Primer cards",
            },
            {
                id: nextId(),
                text: "Segunda card de prueba"
            }
        ]
    },
    {
        id: nextId(),
        title: "Segunda List de Card",
        cards: [
            {
                id: nextId(),
                text: "Primer cards",
            },
            {
                id: nextId(),
                text: "Segunda card de prueba"
            },
            {
                id: nextId(),
                text: "Tercera card de prueba"
            }
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                id: nextId(),
                title: action.payload,
                cards: []
            }
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
            const newCard = {
                id: nextId(),
                text: action.payload.text,
            };
            // console.log(newCard);
            //console.log(action.payload.listID)
            const newState = state.map(list => {
                console.log("dentro del nuevo estate ",action.payload.listID)
                
                if (list.id === action.payload.listID) {

                    console.log("dentro del newState", list)
                   
                    return {
                        ...list,
                        cards: [ ...list.cards, newCard] 
                    }

                }else{

                    return list;
                    
                }
            })
            return newState;
        default:
            return initialState;
    }
};

export default listReducer;