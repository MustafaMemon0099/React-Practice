import React, { useState } from 'react'

function Skills() {
  const [skill , setskill] = useState([])
  const showskill = (e)=>{
   console.log(e.target.value , e.target.checked)
   if(e.target.checked){
    setskill([...skill,e.target.value] )
  }
  else{
    setskill([...skill.filter((item)=>item!== e.target.value)])
  }
  }
  
  return (
    <div>
       <input type='checkbox' value="HTML" onChange={showskill}/> HTML
       <br />
        <input type='checkbox' value="CSS" onChange={showskill}/> CSS
        <br />
         <input type='checkbox' value="JavaScript" onChange={showskill}/> Java Script
         <br />
          <input type='checkbox' value="Python" onChange={showskill}/> Python
          <br />
           <input type='checkbox' value="C++" onChange={showskill}/> C++
           <br />
            <input type='checkbox' value="PHP" onChange={showskill}/> PHP
            <h1>{skill + ","}</h1>
    </div>
  )
}

export default Skills