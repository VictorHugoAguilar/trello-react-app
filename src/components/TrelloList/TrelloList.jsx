import React from 'react';
import './TrelloList.scss';

// Importamos los compoenentes personalizados
import TrelloCard from '../TrelloCard/TrelloCard';
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton';

const TrelloList = ({ title, cards, listID }) => {

    return (
        <div className="trelloList">
            <h4>{title}</h4>
            {
                cards?.map(card => (
                    <TrelloCard key={card.id} text={card.text} />
                ))
            }
            <TrelloActionButton listID={listID}/>
        </div>
    );

}

export default TrelloList;