import './normalize.scss'
import './app.scss';

import HomePage from './pages/HomePage/HomePage';
import HeroesPage from './pages/HeroesPage/HeroesPage';
import ComicsPage from './pages/ComicsPage/ComicsPage';

import { Service } from './service/service';
import { Route, Routes } from 'react-router-dom';

function App() {
  const service = Service.getInstance();
  const response = service.getAllCharacters();

  response.then(data => {console.log(data)});

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/heroes' element={<HeroesPage />}></Route>
        <Route path='/comics' element={<ComicsPage />}></Route>
      </Routes>
    </>
  )
}

export default App
