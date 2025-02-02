import { useState } from 'react';

import '../../react_vite/src/App.css';

function Bgcolor() {
  const [color, setColor] = useState<string>('blue');

  const changeColor = () => {
    const colors = ['blue', 'red'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };
  return (
    <>
      <button onClick={changeColor} style={{ backgroundColor: color }}>
        zmenit barvu
      </button>
      <p>aktualni barva: {color}</p>
    </>
  );
}

export default Bgcolor;
