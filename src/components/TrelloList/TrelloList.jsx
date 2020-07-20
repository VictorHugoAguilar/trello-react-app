import React from 'react';
import './TrelloList.scss';

// Importamos los compoenentes personalizados
import TrelloCard from '../TrelloCard/TrelloCard';

const TrelloList = ({ title }) => {

    return (
        <div className="trelloList">
            <h4>{title}</h4>
            <TrelloCard />
        </div>
    );

}

export default TrelloList;