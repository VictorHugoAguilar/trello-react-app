import React from 'react';
// Importamos Estilos
import './Header.scss';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded'; const Header = () => {
    return (
        <div className="header">
            <ListAltRoundedIcon style={{ fontSize: 40, paddingLeft: 60, paddingTop: 20 }} />
            <h1 className="titulo">Trello</h1>
        </div>
    );

}

export default Header;