
import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(prev => prev + 1);
  }
  function decrease() {
    setCount(prev => prev - 1);
  }

  return (
    <div className="App">
      <button type="button" className="inc" onClick={increase}>increase</button>
      <button type="button" className="dec" onClick={decrease}>decrease</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App
