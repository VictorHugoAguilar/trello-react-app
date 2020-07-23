import React, { Component } from 'react';
import './App.scss';

// Importamos los compoenentes personalizados
import Header from '../Header/Header';
import TrelloList from '../TrelloList/TrelloList';

import { connect } from 'react-redux';
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton';

class App extends Component {

  render() {
    const { lists } = this.props;
    console.log(lists)
    return (
      <div className="App">
        <Header />
        <div className="listTrello">
          {
            lists?.map(list => (
              <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
            ))
          }
        <TrelloActionButton list/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
