import React, { useState } from 'react'
import Navbar from './Navbar'
import Cart from './Cart'
import Product from './Product'

function App() {
  const [r , setR] = useState(255)
  const [g , setG] = useState(255)
  const [b , setB] = useState(255)
  return (
    <div>
       <h1>Color Mixer</h1>
       <div style={{backgroundColor : 'rgb('+r+' ,'+g+' , '+b+' ) ', height : 400 , width : 400 , marginLeft: 620 }}></div>
       <h3>Red</h3>
       <input type="range" min ="0" max="255" onChange={ (e) =>setR(e.target.value)} value={r}/>
       <h3>Green</h3> 
       <input type="range" min ="0" max="255"  onChange={ (e) =>setG(e.target.value)}  value={g}/> 
       <h3>Blue</h3>
       <input type="range" min ="0" max="255" onChange={ (e) =>setB(e.target.value)}  value={b}/> 
    </div>
  )
}

export default App