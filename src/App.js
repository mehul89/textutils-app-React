import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  const [mode, setMode] = useState('white');

  useEffect(() => {
    if (mode === 'black') {
      document.body.style.backgroundColor = '#0f172a';
    } else {
      document.body.style.backgroundColor = 'aliceblue';
    }
  }, [mode]);

  const toggleMode = () => {
    if (mode === 'white') {
      setMode('black');
    } else {
      setMode('white');
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Home mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
