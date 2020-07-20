import React from 'react';
import './App.scss';

// Importamos los compoenentes personalizados
import Header from '../Header/Header';
import TrelloList from '../TrelloList/TrelloList';

function App() {
  return (
     <div className="App">
       <Header/>
       <TrelloList title="prueba"/>
    </div>
  );
}

export default App;
