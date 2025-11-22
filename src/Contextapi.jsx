import React from 'react'
import Classcomponent from './Classcomponent'
import { Subjectcontext } from './Subject'
import { useState } from 'react'

function Contextapi() {

    const [sub , setSub] = useState("")
    
  return (
    <div style={{ backgroundColor: "yellow", padding: 60 }}>
      <h1>Context Api</h1>

      <div>
        <select defaultValue={"select subject"} onChange={ (e)=> setSub (e.target.value)}
        >
             <option value="">select subject</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="History">History</option>

          <option value="Geography">Geography</option>
          <option value="English">English</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Physicss">Physical Education</option>
          <option value="Art">Art</option>
        </select> 
        <button onClick={function(){
            setSub ("")
        }}>Clear</button>
        
        <Subjectcontext.Provider value={sub}>
          <Classcomponent />
        </Subjectcontext.Provider>

      </div>
    </div>
  )
}

export default Contextapi
