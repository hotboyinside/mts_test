import './app.scss';
import md5 from 'md5';

function App() {
const ts = Date.now().toString();  // Генерируем временную метку
const publicKey = 'ваш_публичный_ключ_от_Marvel_API';
const privateKey = 'ваш_приватный_ключ_от_Marvel_API';

const hash = md5(ts + privateKey + publicKey);

console.log(hash);

  return (
    <>
    </>
  )
}

export default App
