import React from 'react';
// Importamos los estilos personalizados para el componente
import './TrelloList.scss';
// Importamos componentes para DropAndDrag
import { Droppable, Draggable } from 'react-beautiful-dnd';
// Importamos los compoenentes personalizados
import TrelloCard from '../TrelloCard/TrelloCard';
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton';

const TrelloList = ({ title, cards, listID, index }) => {
    return (
        <Draggable 
            draggableId={String(listID)} 
            index={index}
        >
            {provided => (
                <div 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="trelloList">
                        <Droppable 
                            droppableId={String(listID)} 
                            type="card"
                        >
                            {provided => (
                                <div 
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <h4>{title}</h4>
                                    {
                                        cards?.map((card, index) => (
                                            <TrelloCard
                                                key={card.id}
                                                id={card.id}
                                                text={card.text}
                                                index={index}
                                            />
                                        ))
                                    }
                                    <TrelloActionButton listID={listID} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                </div>
            )}
        </Draggable>
    );
}

export default TrelloList;