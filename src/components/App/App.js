import React, { Component } from 'react';
import './App.scss';

// Importamos los compoenentes personalizados
import Header from '../Header/Header';
import TrelloList from '../TrelloList/TrelloList';

import { connect } from 'react-redux';

class App extends Component {

  render() {
    const { lists } = this.props
    console.log(lists)
    return (
      <div className="App">
        <Header />
        {
          lists?.map(list => (
            <TrelloList key={list.id} title={list.title} cards={list.cards} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
