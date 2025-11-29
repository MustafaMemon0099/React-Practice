import React, { useState } from 'react'
import { useSelector } from 'react-redux';


function Cart() {
   const count = useSelector((state) => state.Cart.count)
  return (
    <div>
        Cart = {count}
    </div>
  )
}

export default Cart
