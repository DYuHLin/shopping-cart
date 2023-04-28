import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";

function Cart() {
  const {items, deleteCart, incQuantity, decQuantity} = useContext(CartContext);
  return (
      <div className="cartPage">
        <div className="title">
          Cart
        </div>
        
        <div className="cart">
        {items.map((item) => {
          return(
            <div className="itemCard">
              <div className="show">
                
                <div className="general">
                  <div><img className="cartIcon" src = {`${item.image}`} /></div>
                  <div className="cart-name">{item.name}</div>
                  <div className="cart-price">{item.price}</div>
                </div>
              </div>
             
             <div className="tasks"> 
             <button onClick={() => deleteCart(item.id)} className="delete-cart">Remove</button>
             <div className="plus-minus">
              <button onClick={() => incQuantity(item.id)} className="inc">+</button>
              <button onClick={() => decQuantity(item.id)} className="dec">-</button>
             </div>
              <div className="cart-quantity">{item.quantity}</div>
             </div>
          </div>
          )
        })}
        <button className="checkout">Checkout</button>
        </div>
      </div>
  );
}

export default Cart;
