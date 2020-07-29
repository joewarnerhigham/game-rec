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
      reccomendedGameTitle: 'Halo 2',
      reccomendedGameImage2: 'https://i.redd.it/5ah99bv9croy.png',
      reccomendedGameTitle2: 'Destiny',
      reccomendedGameImage3: 'https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_390x400_1x-0.jpeg',
      reccomendedGameTitle3: 'Red Dead Redemption 2',
    },
  }

  const [gameImage, setGameImage] = useState(initialState.currentGame.gameImage);
  const [gameTitle, setGameTitle] = useState(initialState.currentGame.gameTitle);
  const [gameDetails, setGameDetails] = useState(initialState.currentGame.gameDetails);
  const [gameRating, setGameRating] = useState(initialState.currentGame.gameRating);
  const [gamePrice, setGamePrice] = useState(initialState.currentGame.gamePrice);
  const [findBest, setFindBest] = useState(initialState.currentGame.findBest);

  const [reccomendedGameImage, setReccomendedGameImage] = useState(initialState.reccomendedGames.reccomendedGameImage);
  const [reccomendedGameTitle, setReccomendedGameTitle] = useState(initialState.reccomendedGames.reccomendedGameTitle);
  const [reccomendedGameImage2, setReccomendedGameImage2] = useState(initialState.reccomendedGames.reccomendedGameImage2);
  const [reccomendedGameTitle2, setReccomendedGameTitle2] = useState(initialState.reccomendedGames.reccomendedGameTitle2);
  const [reccomendedGameImage3, setReccomendedGameImage3] = useState(initialState.reccomendedGames.reccomendedGameImage3);
  const [reccomendedGameTitle3, setReccomendedGameTitle3] = useState(initialState.reccomendedGames.reccomendedGameTitle3);
  


  return (


    <div className="App">
      <Nav
        setgameImage={setGameImage}
        setReccomendedGameImage={setReccomendedGameImage}
        setReccomendedGameImage2={setReccomendedGameImage2}
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
        reccomendedGameImage={reccomendedGameImage}
        reccomendedGameImage2={reccomendedGameImage2}
        reccomendedGameTitle={reccomendedGameTitle}
        reccomendedGameTitle2={reccomendedGameTitle2}
        reccomendedGameImage3={reccomendedGameImage3}
        reccomendedGameTitle3={reccomendedGameTitle3}
        gameImage={gameImage}
        gameTitle={gameTitle} />

    </div>
  );
}

export default App;
