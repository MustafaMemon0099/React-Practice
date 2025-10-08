import React, { useState } from 'react'
import Products from './Products';
import Hello from './hello';
import Skills from './Skills';


function App() {
  const [Fruit, abc] = useState("Apple");

  const changefruit = () => {
    abc(Fruit === "Apple" ? "Banana" : "Apple" );
  }

  return (
    <div>
      <h1>Change Fruit Name</h1>
      <h1>{Fruit}</h1>
      <button className='btn' onClick={changefruit}>Click me!!</button>
      <hr></hr>
      <Products/>
      <hr></hr>
        <Hello/>
        <br /><br /><hr />
        <Skills></Skills>
    </div>
  );
}

export default App;
