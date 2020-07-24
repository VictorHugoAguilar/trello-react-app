import React, { Component } from 'react';
import { connect } from 'react-redux';
// Importamos los estilos
import './App.scss';
// Importamos componentes para DropAndDrag
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { sort } from '../../actions'
// Importamos los compoenentes personalizados
import Header from '../Header/Header';
import TrelloList from '../TrelloList/TrelloList';
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton';


class App extends Component {

  onDragEnd = (result) => {
    const { dispatch } = this.props;
    // console.log(result);
    const { destination, source, draggableId , type} = result;

    if (!destination) {
      return;
    }

    dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ) 
    );
  }

  render() {
    const { lists } = this.props;
    // console.log(lists)
    return (
      <div className="App">
        <Header />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="all-lists" direction="horizontal" type="list" >
            {provided => (
              <div { ...provided.droppableProps }  ref={provided.innerRef} className="listTrello">
                {
                  lists?.map((list, index) => (
                    <TrelloList 
                      listID={list.id} 
                      key={list.id} 
                      title={list.title} 
                      cards={list.cards}
                      index={index} 
                    />
                  ))
                }
                <TrelloActionButton list />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
