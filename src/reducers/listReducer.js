// Importamos un generador ID
// import nextId from "react-id-generator";

// Importamos las constantes de las acciones
import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 5;

const initialState = [
    {
        id: `list-${0}`,
        title: "Primer List de Card",
        cards: [
            {
                id: `card-${0}`,
                text: "Primer cards",
            },
            {
                id: `card-${1}`,
                text: "Segunda card de prueba"
            }
        ]
    },
    {
        id: `list-${1}`,
        title: "Segunda List de Card",
        cards: [
            {
                id: `card-${2}`,
                text: "Primer cards",
            },
            {
                id: `card-${3}`,
                text: "Segunda card de prueba"
            },
            {
                id: `card-${4}`,
                text: "Tercera card de prueba"
            }
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST: {
            const newList = {
                id: `list-${listID}`,
                title: action.payload,
                cards: []
            }
            listID += 1;
            return [...state, newList]
        }
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                id: `card-${cardID}`,
                text: action.payload.text,
            };
            cardID += 1;
            // console.log(newCard);
            //console.log(action.payload.listID)
            const newState = state.map(list => {
                console.log("dentro del nuevo estate ", action.payload.listID)
                if (list.id === action.payload.listID) {
                    console.log("dentro del newState", list)
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            })
            return newState;
        }
        case CONSTANTS.DRAG_SORT: {
            const { droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                droppableId
            } = action.payload;
            const newState = [...state];
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;
        }
        default: {
            return initialState;
        }
    }
};

export default listReducer;