import React from 'react';
import './App.scss';

// Importamos los compoenentes personalizados
import TrelloList from '../TrelloList/TrelloList';

function App() {
  return (
     <div className="App">
       <h2>Trello</h2>
       <TrelloList title="prueba"/>
    </div>
  );
}

export default App;
