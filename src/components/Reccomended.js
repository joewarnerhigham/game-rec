import React from 'react';
import '../styles/Reccomended.css';
import GameCard from './GameCard';

const Reccomended = ({reccomendedGameTitle,
                    reccomendedGameImage,
                    gameTitle,
                    gameImage,
                    reccomendedGameImage2,
                    reccomendedGameTitle2}) => {
    return (
        <div className='reccomended'>
            
            <GameCard 
                title={reccomendedGameTitle}
                image={reccomendedGameImage}/>
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