import './normalize.scss'
import './app.scss';

import HomePage from './pages/HomePage/HomePage';
import HeroesPage from './pages/HeroesPage/HeroesPage';
import ComicsPage from './pages/ComicsPage/ComicsPage';

import { MarvelContext } from './context/context.ts';
import { MarvelCharacter } from './service/service.ts';

import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [ characters, setCharacters ] = useState<MarvelCharacter[]>([]);
  return (
    <MarvelContext.Provider value={{ characters, setCharacters }}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/heroes' element={<HeroesPage />}></Route>
        <Route path='/comics' element={<ComicsPage />}></Route>
      </Routes>
    </MarvelContext.Provider>
  )
}

export default App
