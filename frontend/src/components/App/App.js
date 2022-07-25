import GameXO from 'components/game_so/GameXO/Game';
import Main from 'components/Main/Main';
import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from '../../store';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/games/xo' element={<GameXO />} />
      </Routes>
    </Provider>
  );
}

export default App;
