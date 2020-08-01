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
                    reccomendedGameImageFour,
                    reccomendedGameTitleFour,
                }) => {
    return (
        <div className='reccomended'>
            
            <GameCard 
                title={reccomendedGameTitleThree}
                image={reccomendedGameImageThree}
                gameTitle={gameTitle}/>
            <GameCard 
                title ={reccomendedGameTitleTwo}
                image={reccomendedGameImageTwo}
                gameTitle={gameTitle}/>

            <GameCard 
                title={reccomendedGameTitleOne}
                image={reccomendedGameImageOne}
                gameTitle={gameTitle}/>
            <GameCard 
                title={reccomendedGameTitleFour}
                image={reccomendedGameImageFour}
                gameTitle={gameTitle}/>
        
        </div>
    )
}
        

export default Reccomended;