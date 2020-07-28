import React from 'react';
import '../styles/GameCard.css';
import { Card } from 'semantic-ui-react';

const GameCard = () => {
    
    return (

        <div className='game-card'>
            <h3>Reccomended 'title'</h3>
            <Card 
                image='https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png'
                header='Halo 2'
                meta='Sci-fy 1st Person Shooter'
                description='Halo 2 is a 2004 first-person shooter game developed by Bungie and published by Microsoft Game Studios. Released for the Xbox, the game is the second installment in the Halo franchise and the sequel to 2001s critically acclaimed Halo Combat Evolved'
                extra='Find Best Price'
            />
        </div>
    )
}

export default GameCard