import React, {useState} from 'react';
import '../styles/App.css';
import Nav from './Nav';
import GameDetails from './GameDetails';
import Reccomended from './Reccomended';


function App() {

  const initialState = {
    gameImage: 'https://www.rockstargames.com/rockstar_games/games/img/fob/640/sanandreas.jpg',
    gameTitle: 'GTA San Andreas',
    gameDetails: '',
    gameRating: '4.2',
    gamePrice: '',
    findBest: '',
  }

  const [gameImage, setgameImage] = useState(initialState.gameImage);
  const [gameTitle, setgameTitle] = useState(initialState);
  const [gameDetails, setgameDetails] = useState(initialState);
  const [gameRating, setgameRating] = useState(initialState.gameRating);
  const [gamePrice, setgamePrice] = useState(initialState);

  const [findBest, setfindBest] = useState(initialState);

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
      <Reccomended />
    </div>
  );
}

export default App;
