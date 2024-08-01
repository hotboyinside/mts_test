import './normalize.scss'
import './app.scss';

import HomePage from './pages/HomePage/HomePage';

import { Transport } from './transport/transport';
import { Route, Routes } from 'react-router-dom';

function App() {
  const trans = Transport.getInstance();
  const response = trans.getData()

  response.then(data => {console.log(data)})

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </>
  )
}

export default App
