import './normalize.scss'
import './app.scss';

import { Transport } from './transport/transport';

function App() {
  const trans = Transport.getInstance();
  const response = trans.getData()

  response.then(data => {console.log(data)})

  return (
    <>
      <h1 className='title'>Hello world!</h1>
    </>
  )
}

export default App
