import React, { Component } from 'react';
import { Icon } from '@material-ui/core';
// Importamos los estilos personalizados
import './TrelloActionButton.scss';

class TrelloActionButton extends Component {

    trelloAdd = () => {
        const { list } = this.props;

        const textButton = list ? "Añade otra lista " : "Añade otra tarjeta";
        const textOpacityButton = list ? 1 : 0.5;
        const textColorButton = list ? "white" : "black";
        return (
            <div
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

    render() {
        return this.trelloAdd();
    }
}

export default TrelloActionButton;