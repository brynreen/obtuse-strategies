import { strategies } from './strategies.json';
import './App.css';

function App() {
  const index = Math.floor(Math.random() * strategies.length);
  const strategy = strategies[index];
  return (
    <>
      <h1>Obtuse Strategies</h1>
      <p>{strategy}</p>
    </>
  );
}

export default App;
