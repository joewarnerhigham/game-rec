import React from 'react';
import '../styles/Reccomended.css';
import GameCard from './GameCard';

const Reccomended = ({reccomendedGameTitle,
                    reccomendedGameImage,
                    gameTitle,
                    gameImage,
                    reccomendedGameTitle2,
                    reccomendedGameImage2,
                    reccomendedGameTitle3,
                    reccomendedGameImage3,
                }) => {
    return (
        <div className='reccomended'>
            
            <GameCard 
                title={reccomendedGameTitle3}
                image={reccomendedGameImage3}/>
            <GameCard 
                title ={reccomendedGameTitle2}
                image={reccomendedGameImage2}/>

            <GameCard 
                title={reccomendedGameTitle}
                image={reccomendedGameImage}/>
            <GameCard 
                title={gameTitle}
                image={gameImage}/>
        
        </div>
    )
}
        

export default Reccomended;