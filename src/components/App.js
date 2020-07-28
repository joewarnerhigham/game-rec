import React from 'react';
import '../styles/App.css';
import Nav from './Nav';
import GameDetails from './GameDetails';
import Reccomended from './Reccomended';


function App() {
  return (
    <div className="App">
      <Nav />
      <GameDetails />
      <Reccomended />
    </div>
  );
}

export default App;
