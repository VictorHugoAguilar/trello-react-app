import React, { Component } from 'react';
import { Icon, Card, Button } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
 
// Importamos los estilos personalizados
import './TrelloActionButton.scss';

class TrelloActionButton extends Component {

    state = {
        formOpen: false,
        text: ""
    } 

    openForm = () => {
        this.setState({formOpen: true});
    }

    closeForm = (e) => {
      this.setState({formOpen: false});  
    }

    handleInputChange = (e) => {
        this.setState({text: e.target.value});
    }

    trelloAdd = () => {
        const { list } = this.props;

        const textButton = list ? "Añade otra lista " : "Añade otra tarjeta";
        const textOpacityButton = list ? 1 : 0.5;
        const textColorButton = list ? "white" : "black";
        return (
            <div
                onClick={this.openForm}
                className="TrelloActionButton"
                style={{
                    opacity: textOpacityButton,
                    color: textColorButton,
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

        return (
            <div>
            <Card className="CardAdd">
                <TextareaAutosize
                    className="TextAreaAdd" 
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    onBlur={this.closeForm} 
                    placeholder={placeholder} 
                    autoFocus/>
            </Card>
            <div>
                <Button />
            </div>
            </div>
        );
    }

    render() {
        return this.state.formOpen ? this.trelloForm() : this.trelloAdd();
    }
}

export default TrelloActionButton;