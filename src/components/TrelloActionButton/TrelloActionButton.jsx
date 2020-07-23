import React, { Component } from 'react';
import { Icon, Card, Button } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../../actions'
// Importamos los estilos personalizados
import './TrelloActionButton.scss';

class TrelloActionButton extends Component {

    state = {
        formOpen: false,
        text: ""
    }

    openForm = () => {
        this.setState({ formOpen: true });
    }

    closeForm = (e) => {
        this.setState({ formOpen: false });
    }

    handleInputChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleAddList = () => {
        console.log(this.state);

        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addList(text));
            this.resetTextBox();
        }
        return;
    }

    handleAddCard = () => {
        console.log(this.state);

        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addCard(listID, text));
            this.resetTextBox();
        }
        return;
    }

    resetTextBox = () => {
        this.setState({ text: "" });
    }

    trelloAdd = () => {
        const { list } = this.props;

        const textButton = list ? "Añade otra lista " : "Añade otra tarjeta";
        const textOpacityButton = list ? 1 : 0.5;
        const textColorButton = list ? "white" : "black";
        const positionButton = list ? "12vh" : "10px";
        return (
            <div
                onClick={this.openForm}
                className="TrelloActionButton"
                style={{
                    opacity: textOpacityButton,
                    color: textColorButton,
                    marginTop: positionButton,
                }}>
                <Icon>add_circle</Icon>
                <p>{textButton} </p>
            </div>
        );
    }

    trelloForm = () => {
        const { list } = this.props;
        const placeholder = list ? "Introduce el título de la lista..." : "Introduce el título de la tarjeta...";
        const titleButton = list ? "Añade Lista" : "Añade Tarjeta";
        const positionButton = list ? "12vh" : "10px";

        return (
            <div className="CardAction" style={{
                marginTop: positionButton,
            }}>
                <Card className="CardAdd">
                    <TextareaAutosize
                        className="TextAreaAdd"
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        onBlur={this.closeForm}
                        placeholder={placeholder}
                        autoFocus />
                </Card>
                <div className="CardButton">
                    <Button
                        onMouseDown={list ? this.handleAddList : this.handleAddCard}
                        variant="contained">{titleButton}</Button>
                    <Icon id="iconCancel" >cancelpresentation</Icon>
                </div>
            </div>
        );
    }

    render() {
        return this.state.formOpen ? this.trelloForm() : this.trelloAdd();
    }
}

export default connect()(TrelloActionButton);