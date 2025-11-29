import React from 'react'
import Cart from './Cart'

function Navbar() {
  return (
    <div style={{ backgroundColor: "purple", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", fontFamily: "Arial", fontSize: "28px", fontWeight: "bold", boxShadow: "0px 2px 10px rgba(0,0,0,0.3)" }}>
     Website.com
      <Cart/>
    </div>
  )
}

export default Navbar
