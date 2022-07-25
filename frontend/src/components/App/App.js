import GameXO from 'components/game_so/GameXO/Game';
import Main from 'components/Main/Main';
import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/games/xo' element={<GameXO />} />
      </Routes>
    </>

  );
}

export default App;
