import React from 'react'
import Cart from './Cart'
import { useDispatch } from 'react-redux';
import { increment , decrement ,clear} from './Redux/slice';
import { useSelector } from 'react-redux';

function Product() {
    const Cart = useSelector((state) => state.Cart.count)
    const dispatch = useDispatch();
  return (

  <div className="product-card">
  <img src="https://dlcdnwebimgs.asus.com/gain/FBAAC5C2-2ED4-406C-AA47-5A105797004A/w750/h470/fwebp" className="product-img" />


  <div className="product-info">
    <h2>Wireless Headphones</h2>
    <h3 className="price">$129.99</h3>
    <p>
      Experience high-quality sound with these wireless headphones. Featuring
      noise cancellation, long-lasting battery life, and a sleek modern design.
    </p>

    <div className="btn-box">
      <button className="add-btn" onClick={() => dispatch (increment())}>Add to Cart</button>
      <button className="remove-btn"  onClick={() => dispatch (decrement())}>Remove From Cart</button>
       <button className="remove-btn"  onClick={() => dispatch (clear())}>clear From Cart</button>
    </div>
  </div>

</div>


      
    
  )
}

export default Product