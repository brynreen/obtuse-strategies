import { strategies } from './strategies.json';
import './App.css';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * strategies.length));

  function handleClick() {
    setIndex(Math.floor(Math.random() * strategies.length));
  }

  return (
    <>
      <h1>Obtuse Strategies</h1>
      <p className="strategy">{strategies[index]}</p>
      <button onClick={handleClick}>
        Random
      </button>
    </>
  );
}

export default App;
