
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
  function multiply (){
    setCount(prev => prev * 2);
  }
  function reset (){
    setCount(prev => prev = 0);
  }
  return (
    <div className="App">
      <button type="button" className="inc" onClick={increase}>increase</button>
      <button type="button" className="dec" onClick={decrease}>decrease</button>
      <button type="button" className="mul" onClick={multiply}>multiply 2</button>
      <button type="button" className="res" onClick={reset}>reset </button>
      <h1 className="count">{count}</h1>
    </div>
  )
}

export default App
