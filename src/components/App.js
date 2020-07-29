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
      reccomendedGameImage: 'https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png',
      reccomendedGameTitle: 'Red Dead Redemption 2',
    },
  };

  const [gameImage, setgameImage] = useState(initialState.currentGame.gameImage);
  const [gameTitle, setgameTitle] = useState(initialState.currentGame.gameTitle);
  const [gameDetails, setgameDetails] = useState(initialState.currentGame.gameDetails);
  const [gameRating, setgameRating] = useState(initialState.currentGame.gameRating);
  const [gamePrice, setgamePrice] = useState(initialState.currentGame.gamePrice);
  const [findBest, setfindBest] = useState(initialState.currentGame.findBest);

  const [reccomendedGameImage, setReccomendedGameImage] = useState(initialState.reccomendedGames.reccomendedGameImage);
  const [reccomendedGameTitle, setReccomendedGameTitle] = useState(initialState.reccomendedGames.reccomendedGameTitle);
  
  
  return (
    <div className="App">
      <Nav
        setgameImage={setgameImage}
        gameTitle={setgameTitle}
        gameDetails={setgameDetails}
        gameRating={setgameRating}
        gamePrice={setgamePrice}
        findBest={setfindBest} />
      <GameDetails 
        gameImage={gameImage}
        gameTitle={gameTitle}
        gameDetails={gameDetails}
        gameRating={gameRating}
        gamePrice={gamePrice}
        findBest={findBest} />
      <Reccomended 
        reccomendedGameImage={reccomendedGameImage}
        reccomendedGameTitle={reccomendedGameTitle}
        gameImage={gameImage}
        gameTitle={gameTitle} />
    </div>
  );
}

export default App;
