import React from 'react';
import './TrelloCard.scss';
// Importamos Material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({ text }) => {

    return (
        <div className="trelloCard">
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default TrelloCard;