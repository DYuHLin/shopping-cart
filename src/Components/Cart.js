import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";

function Cart() {
  const {items, deleteCart, incQuantity, decQuantity, getTotal} = useContext(CartContext);

  const total = () => {
    return (items.quantity * items.price).toFixed(2);
  };
  const totalAmount = getTotal();

  return (
      <div className="cartPage">
        <div className="title">
          Cart
        </div>
        
        <div className="cart">
        {items.map((item, id) => {
          return(
            <div className="itemCard">
              <div className="show">
                
                <div className="general">
                  <div><img className="cartIcon" src = {`${item.image}`} /></div>
                  <div className="cart-name">{item.name}</div>
                  <div className="cart-price">R{item.price}</div>
                </div>
              </div>
             
             <div className="tasks"> 
             <button onClick={() => deleteCart(id)} className="delete-cart">Remove</button>
             <div className="plus-minus">
              <button id="dec-btn" onClick={() => incQuantity(item.id)} className="inc">+</button>
              <button disabled = {item.quantity <= 1}  onClick={() => decQuantity(item.id)} className="dec">-</button>
             </div>
              <div className="cart-quantity">{item.quantity}</div>
             </div>
          </div>
          )
          
        })}
        <div className="total">Total: R{totalAmount}</div>
        <button className="checkout">Checkout</button>
        </div>
      </div>
  );
}

export default Cart;
