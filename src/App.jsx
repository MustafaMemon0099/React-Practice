import React, { useState } from 'react'


function App() {
  const [finaldata, setFinaldata] = useState('');
const dog = async function() {
  const response = await fetch('https://dogapi.dog/api/v2/facts')
  const data = await response.json();
  setFinaldata (data.data[0].attributes.body);
}
 

  return (
    <div>
      <button onClick={dog}>Click me!!</button>
      <h1>{finaldata}</h1>
      
    </div>
  )
}

export default App
