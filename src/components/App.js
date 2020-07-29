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
      reccomendedGameImage2: 'https://i.redd.it/5ah99bv9croy.png',
      reccomendedGameTitle2: 'Destiny',
    },
  }

  const [gameImage, setgameImage] = useState(initialState.currentGame.gameImage);
  const [gameTitle, setgameTitle] = useState(initialState.currentGame.gameTitle);
  const [gameDetails, setgameDetails] = useState(initialState.currentGame.gameDetails);
  const [gameRating, setgameRating] = useState(initialState.currentGame.gameRating);
  const [gamePrice, setgamePrice] = useState(initialState.currentGame.gamePrice);
  const [findBest, setfindBest] = useState(initialState.currentGame.findBest);

  const [reccomendedGameImage, setReccomendedGameImage] = useState(initialState.reccomendedGames.reccomendedGameImage);
  const [reccomendedGameTitle, setReccomendedGameTitle] = useState(initialState.reccomendedGames.reccomendedGameTitle);
  const [reccomendedGameImage2, setReccomendedGameImage2] = useState(initialState.reccomendedGames.reccomendedGameImage2);
  const [reccomendedGameTitle2, setReccomendedGameTitle2] = useState(initialState.reccomendedGames.reccomendedGameTitle2);


  return (


    <div className="App">
      <Nav
        setgameImage={setgameImage}
        setReccomendedGameImage={setReccomendedGameImage}
        setReccomendedGameImage2={setReccomendedGameImage2}
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
        reccomendedGameImage2={reccomendedGameImage2}
        reccomendedGameTitle={reccomendedGameTitle}
        reccomendedGameTitle2={reccomendedGameTitle2}
        gameImage={gameImage}
        gameTitle={gameTitle} />

    </div>
  );
}

export default App;
