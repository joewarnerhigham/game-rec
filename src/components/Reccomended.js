import React from 'react';
import '../styles/Reccomended.css';
import GameCard from './GameCard';

const Reccomended = ({reccomendedGameTitleOne,
                    reccomendedGameImageOne,
                    gameTitle,
                    gameImage,
                    reccomendedGameTitleTwo,
                    reccomendedGameImageTwo,
                    reccomendedGameTitleThree,
                    reccomendedGameImageThree,
                }) => {
    return (
        <div className='reccomended'>
            
            <GameCard 
                title={reccomendedGameTitleThree}
                image={reccomendedGameImageThree}/>
            <GameCard 
                title ={reccomendedGameTitleTwo}
                image={reccomendedGameImageTwo}/>

            <GameCard 
                title={reccomendedGameTitleOne}
                image={reccomendedGameImageOne}/>
            <GameCard 
                title={gameTitle}
                image={gameImage}/>
        
        </div>
    )
}
        

export default Reccomended;