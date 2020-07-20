import React from 'react';
// Importamos Material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TrelloCard = () => {

    return (
        <div className="trelloCard">
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default TrelloCard;