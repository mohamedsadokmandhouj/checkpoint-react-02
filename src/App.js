import React from 'react';
import { players } from './Players.js';
import './App.css';
import CardPlayers from './CardPlayers.js';

function App() {
  console.log(players);
  return (
    <div>
 <CardPlayers players={players} />
    </div>
  );
}

export default App;