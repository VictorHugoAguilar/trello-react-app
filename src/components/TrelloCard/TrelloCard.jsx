import React from 'react';
// Importamos los estilos personalizados para el componente
import './TrelloCard.scss';
// Importamos componentes para DropAndDrag
import { Draggable } from 'react-beautiful-dnd';
// Importamos Material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({ text, id, index }) => {

    return (
        <Draggable
            draggableId={String(id)}
            index={index} >
            {provided => (
                <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="trelloCard" >
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>
    )
}

export default TrelloCard;