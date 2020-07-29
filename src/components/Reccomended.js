import React from 'react';
import '../styles/Reccomended.css';
import GameCard from './GameCard';

const Reccomended = ({reccomendedGameTitle, reccomendedGameImage, gameTitle, gameImage}) => {
    return (
        <div className='reccomended'>
            
            <GameCard 
                title={reccomendedGameTitle}
                image={reccomendedGameImage}/>
            <GameCard 
                title ={gameTitle}
                image={gameImage}/>

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