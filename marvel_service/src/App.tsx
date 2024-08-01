import './app.scss';
import md5 from 'md5';

function App() {
const ts = Date.now().toString();
// const hash = md5(ts + privateKey + publicKey);

console.log(import.meta.env.VITE_PRIVATE_API_KEY);

  return (
    <>
    <h1 className='title'>Hello world!</h1>
    {/* <p>{process.env.REACT_APP_PRIVATE_API_KEY}</p> */}
    </>
  )
}

export default App
