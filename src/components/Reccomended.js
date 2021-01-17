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
        <div className='reccomended' id='reccomended'>
            
            <GameCard 
                title={reccomendedGameTitleThree}
                image={reccomendedGameImageThree}
                description={reccomendedGameTitleThree}/>
            <GameCard 
                title ={reccomendedGameTitleTwo}
                image={reccomendedGameImageTwo}
                description={reccomendedGameTitleTwo}/>

            <GameCard 
                title={reccomendedGameTitleOne}
                image={reccomendedGameImageOne}
                description={reccomendedGameTitleOne}/>
            <GameCard 
                title={reccomendedGameTitleFour}
                image={reccomendedGameImageFour}
                description={reccomendedGameTitleFour}/>
        
        </div>
    )
}
        

export default Reccomended;