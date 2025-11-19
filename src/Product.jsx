import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
      <h1>Products</h1>
      <nav>
        <Link to="men">Men</Link> | <Link to="women">Women</Link>
      </nav>

      {/* Renders nested routes (Men / Women) */}
      <Outlet />
    </div>
  )
}

export default Product