import React, { useState } from 'react'

function Products() {
  const[counter , update]=useState(0)
  const changenumber = ()=>{
    update (counter+1 )
  }
  const reverseNumber = ()=>{
    update (counter-1)
  } 
  return (
    <div>
      <h1>counter:{counter}</h1>
      <button onClick={changenumber}>➕</button>
      <br></br>
      <br></br>
      <button onClick={reverseNumber}>➖</button>
    </div>
  )
}

export default Products