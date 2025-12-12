import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './index.css'


function App() {
  const [products, setProducts] = useState([]);
  const fetchdata = async () =>{
    const response = await axios.get('https://dragonball-api.com/api/characters');
    setProducts(response.data.items);
  }
 


  return (
    <div>
      <button onClick={fetchdata}>Fetch Products</button>
     
       {products.map(Data => (
  <div key={Data.id}>
    <h2>{Data.name}</h2>
    <p>{Data.gender}</p>

    <div>
       <img className="character-img" src={Data.image} alt={Data.name} />
    </div>
  </div>
))}
        
    
        
    </div>
  )
}

export default App