import React, { useState } from 'react'

function hello() {
    const [inputval , updateval ]= useState("");

  return (
    <div>
        <input placeholder='enter a text' value={inputval} onChange={(e)=>{
             updateval(e.target.value)
        }}></input>
        <h1>live value : {inputval}</h1>
        <button onClick={()=>{updateval ("")}}>click me!!</button>
    </div>
  )
}

export default hello