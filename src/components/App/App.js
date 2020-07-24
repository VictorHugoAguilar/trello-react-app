import React, { Component } from 'react';
import { connect } from 'react-redux';
// Importamos los estilos
import './App.scss';
// Importamos componentes para DropAndDrag
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../../actions'
// Importamos los compoenentes personalizados
import Header from '../Header/Header';
import TrelloList from '../TrelloList/TrelloList';
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton';


class App extends Component {

onDragEnd = ( result ) => {
  console.log(result);
  const { destination, source, draggableId } = result;

  if(!destination){
    return;
  }

  this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    )
  );
} 

  render() {
    const { lists } = this.props;
    console.log(lists)
    return (
      <div className="App">
        <Header />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="listTrello">
            {
              lists?.map(list => (
                <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
              ))
            }
            <TrelloActionButton list />
          </div>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
