import React, { useState } from 'react'
import Products from './Products';
import Hello from './hello';
import Skills from './Skills';


function App() {
 const [gender , setgender] = useState("Male")
 const [city , setcity] = useState("")
  return (
    <div>
      <input type='radio' name='gender' value = "Male" id='Male' onChange={(e)=>setgender(e.target.value)} chacked = {gender === "Male"}/>
      <label htmlFor='Male'>Male</label>

      <input type='radio' name='gender' value = "Female" id='Female' onChange={(e)=>setgender(e.target.value)} chacked = {gender === "Female"}/>
       <label htmlFor='Female'>Female</label>

       <input type='radio' name='gender' value = "prefer not to say" id='prefer not to say' onChange={(e)=>setgender(e.target.value)} chacked = {gender === "prefer not to say"}/>
      <label htmlFor='prefer not to say'>prefer not to say</label>

       <h2>{gender}</h2>
       <hr></hr>
       <select onChange={function(e){setcity (e.target.value)}} defaultValue={"Quetta"}>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Quetta">Quetta</option>
        <option value="Rawalpindi">Rawalpindi</option>
       </select>
       <h2>Selected city : {city}</h2>
      <hr></hr>
      <Products/>
      <hr></hr>
        <Hello/>
        <br /><br /><hr />
        <Skills></Skills>
    </div>
  );
}

export default App;
