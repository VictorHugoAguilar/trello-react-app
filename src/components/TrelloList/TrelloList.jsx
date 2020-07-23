import React from 'react';
import './TrelloList.scss';

// Importamos los compoenentes personalizados
import TrelloCard from '../TrelloCard/TrelloCard';

const TrelloList = ({ title, cards }) => {

    return (
        <div className="trelloList">
            <h4>{title}</h4>
            {
                cards?.map(card => (
                    <TrelloCard key={card.id} text={card.text} />
                ))
            }
        </div>
    );

}

export default TrelloList;