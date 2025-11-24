import React from 'react'
import Home from './Home'
import { Routes , Route} from 'react-router-dom'
import Adduser from './Adduser'
import { NavLink } from 'react-router-dom' 
function App() {
  return (
    <div>
      
        <div style={{ justifyContent:'space-between', display:'flex'}}>
       <NavLink to="/adduser" >Add User</NavLink>
        <NavLink to="/">Home</NavLink>  
        </div>   
     
     
      <Routes>
        <Route path="/adduser" element={<Adduser/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App