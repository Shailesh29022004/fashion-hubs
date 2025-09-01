import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
 
    
    <div className="cart">
         <div> <h2>🛒 Your Cart</h2></div>
     
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) :
      

      (
        cartItems.map((item, i) => (
          <div key={i} className="item">
            
            <img src={item.image} width={150} alt={item.name} />
            <h4>{item.name}</h4>
             <h5>{item.description}</h5> 
            <p>Price: ${item.price}</p>
             <span className="starrating" data-rating="4.5"></span>

            <div className="buyy">
            <button>BUY NOW</button>
            </div>

          </div>
         
        ))
      )}

    </div>
  );
}

export default Cart;
