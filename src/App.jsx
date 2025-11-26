import React from 'react'
import Home from './Home'
import { Routes , Route} from 'react-router-dom'
import Adduser from './Adduser'
import { NavLink } from 'react-router-dom' 
import Edit from './edit'
function App() {
  return (
    <div>
      
        <div style={{ justifyContent:'space-between', display:'flex' , padding:'10px', backgroundColor:'lightgray'}}>
       <NavLink to="/adduser" >Add User</NavLink>
        <NavLink to="/">Home</NavLink>  
        </div>   
     
     
      <Routes>
        <Route path="/adduser" element={<Adduser/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App