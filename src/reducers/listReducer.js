// TODO: Importamos un generador ID 
// import nextId from "react-id-generator";

// Importamos las constantes de las acciones
import { CONSTANTS } from '../actions';
// inicializamos las varibles temporales para el sistema mockeado
let listID = 2;
let cardID = 7;
// Creamos un estado inicial con datos mockeados
const initialState = [
    {
        id: `list-${0}`,
        title: "Primer semana",
        cards: [
            {
                id: `card-${0}`,
                text: "Crear el repositorio gitHubs",
            },
            {
                id: `card-${1}`,
                text: "Crear un boceto de la app"
            },
            {
                id: `card-${2}`,
                text: "Investigar app parecidas"
            }
        ]
    },
    {
        id: `list-${1}`,
        title: "Segunda semana",
        cards: [
            {
                id: `card-${3}`,
                text: "Realizar la estructura de la app",
            },
            {
                id: `card-${4}`,
                text: "Importar las dependencias de node"
            },
            {
                id: `card-${5}`,
                text: "Comenzar a codificar"
            },
            {
                id: `card-${6}`,
                text: "Crear los componentes necesarios para las listas"
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
                // console.log("dentro del nuevo estate ", action.payload.listID)
                if (list.id === action.payload.listID) {
                    // console.log("dentro del newState", list)
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
                draggableId,
                type
            } = action.payload;
            const newState = [...state];
            // Movemos las listas
            if(type === "list"){
                // obtenemos la lista
                const list = newState.splice(droppableIndexStart, 1);
                // ordenamos la lista en la nueva posición
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }
            // Movemos la tarjeta dentro de la lista
            if (droppableIdStart === droppableIdEnd) {
                // lista de donde sacamos la tarjeta
                const list = state.find(list => droppableIdStart === list.id);
                // sacamos la tarjeta de la posicio
                const card = list.cards.splice(droppableIndexStart, 1);
                // metemos la tarjeta en la nueva posicion 
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            // Movemos la tarjeta entre las listas
            if(droppableIdStart !== droppableIdEnd){
                // lista de donde sacamos la tarjeta
                const listStart = state.find( list => droppableIdStart === list.id );
                // quitamos la tarjeta de la lista
                const card = listStart.cards.splice( droppableIdStart, 1 );
                // sacamos la lista de destino
                const listEnd = state.find(list => droppableIdEnd === list.id);
                // metemos la tarjeta en la lista de destino
                listEnd.cards.splice(droppableIndexEnd, 0 , ...card);
            }
            return newState;
        }
        default: {
            return initialState;
        }
    }
};

export default listReducer;