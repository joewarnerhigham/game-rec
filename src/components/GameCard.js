import React from 'react';
import '../styles/GameCard.css';
import { Card } from 'semantic-ui-react';

const GameCard = ({title, image, description}) => {

    return (

        <div className='game-card'>
            <a href={`/${title}`}>
                <Card 
                    image={image} 
                    header={title}
                    description={description}
                    extra='Find Best Price'
                />
            </a>
        </div>
    )
}

export default GameCard