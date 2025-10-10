import React, { useEffect, useState } from 'react'

function Clock
() {
  const [time , sertime] = useState(new Date());
  useEffect(
    function(){
      const Timer = setInterval (function(){
        sertime (new Date);
      },1000);
      return ()=>{
      clearInterval(Timer);
    }
    
},[])
    const hours = time.getHours().toString();
    const min= time.getMinutes().toString();
    const sec = time.getSeconds().toString();
 
  return (
    <div>
      <h1>clock</h1>
      {hours} : {min} : {sec}
      
    </div>
  )
}

export default Clock
