import React from 'react';
// Importamos los estilos personalizados para el componente
import './TrelloList.scss';
// Importamos componentes para DropAndDrag
import { Droppable } from 'react-beautiful-dnd';
// Importamos los compoenentes personalizados
import TrelloCard from '../TrelloCard/TrelloCard';
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton';

const TrelloList = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={ String(listID) }>
            {provided => (
                <div {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="trelloList">
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
    );
}

export default TrelloList;