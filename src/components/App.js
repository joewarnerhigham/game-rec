import React, {useState} from 'react';
import '../styles/App.css';
import Nav from './Nav';
import GameDetails from './GameDetails';
import Reccomended from './Reccomended';


function App() {

  const initialState = {
    currentGame: {
      gameImage: 'https://www.rockstargames.com/rockstar_games/games/img/fob/640/sanandreas.jpg',
      gameTitle: 'GTA San Andreas',
      gameDetails: 'Game Details',
      gameRating: '4.2',
      gamePrice: '12.99',
      findBest: '',
    },

    reccomendedGames: {
        recGameOne: {
          recGameImageOne: 'https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png',
          recGameTitleOne: 'Halo 2',
        },
        recGameTwo: {
          recGameImageTwo: 'https://i.redd.it/5ah99bv9croy.png',
          recGameTitleTwo: 'Destiny',
        },
        recGameThree: {
          recGameImageThree: 'https://images.pushsquare.com/7efe4c6a07f2e/red-dead-redemption-2-cover.cover_large.jpg',
          recGameTitleThree: 'Red Dead Redemption 2',
        },
        recGameFour: {
          recGameImageFour: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/CallofDutyModernWarfare%282019%29.jpg/220px-CallofDutyModernWarfare%282019%29.jpg',
          recGameTitleFour: 'Call Of Duty MW',
        },
    },
  };

  const [gameImage, setGameImage] = useState(initialState.currentGame.gameImage);
  const [gameTitle, setGameTitle] = useState(initialState.currentGame.gameTitle);
  const [gameDetails, setGameDetails] = useState(initialState.currentGame.gameDetails);
  const [gameRating, setGameRating] = useState(initialState.currentGame.gameRating);
  const [gamePrice, setGamePrice] = useState(initialState.currentGame.gamePrice);
  const [findBest, setFindBest] = useState(initialState.currentGame.findBest);

  const [reccomendedGameImageOne, setReccomendedGameImageOne] = useState(initialState.reccomendedGames.recGameOne.recGameImageOne);
  const [reccomendedGameTitleOne, setReccomendedGameTitleOne] = useState(initialState.reccomendedGames.recGameOne.recGameTitleOne);
  const [reccomendedGameImageTwo, setReccomendedGameImageTwo] = useState(initialState.reccomendedGames.recGameTwo.recGameImageTwo);
  const [reccomendedGameTitleTwo, setReccomendedGameTitleTwo] = useState(initialState.reccomendedGames.recGameTwo.recGameTitleTwo);
  const [reccomendedGameImageThree, setReccomendedGameImageThree] = useState(initialState.reccomendedGames.recGameThree.recGameImageThree);
  const [reccomendedGameTitleThree, setReccomendedGameTitleThree] = useState(initialState.reccomendedGames.recGameThree.recGameTitleThree);
  const [reccomendedGameImageFour, setReccomendedGameImageFour] = useState(initialState.reccomendedGames.recGameFour.recGameImageFour);
  const [reccomendedGameTitleFour, setReccomendedGameTitleFour] = useState(initialState.reccomendedGames.recGameFour.recGameTitleFour);
  
  


  return (


    <div className="App">
      <Nav
        setgameImage={setGameImage}
        setReccomendedGameImageOne={setReccomendedGameImageOne}
        setReccomendedGameImageTwo={setReccomendedGameImageTwo}
        gameTitle={setGameTitle}
        gameDetails={setGameDetails}
        gameRating={setGameRating}
        gamePrice={setGamePrice}
        findBest={setFindBest} />
      <GameDetails 
        gameImage={gameImage}
        gameTitle={gameTitle}
        gameDetails={gameDetails}
        gameRating={gameRating}
        gamePrice={gamePrice}
        findBest={findBest} />
      <Reccomended 
        reccomendedGameImageOne={reccomendedGameImageOne}
        reccomendedGameImageTwo={reccomendedGameImageTwo}
        reccomendedGameTitleOne={reccomendedGameTitleOne}
        reccomendedGameTitleTwo={reccomendedGameTitleTwo}
        reccomendedGameImageThree={reccomendedGameImageThree}
        reccomendedGameTitleThree={reccomendedGameTitleThree}
        reccomendedGameImageFour={reccomendedGameImageFour}
        reccomendedGameTitleFour={reccomendedGameTitleFour}
        gameImage={gameImage}
        gameTitle={gameTitle} />

    </div>
  );
}

export default App;
