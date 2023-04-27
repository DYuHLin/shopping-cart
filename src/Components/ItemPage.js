import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";

function ItemPage(props) {

  const {addToCart} = useContext(CartContext);

  const [item, setItem] = useState({});
  let {id} = useParams();

  const fetchItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const item = await data.json();

    const newItem = {
      id: item.id,
      name: item.title,
      image: item.image,
      price: item.price,
      quantity: 1,
    };

    setItem(newItem);
  };

  useEffect(() => {
    fetchItem();
  },[]);

  return (
      <div className="itemPage">
          <div className="title">
          {item.title}
        </div>
        <div key={item.id} className="card">
                  <img className="product-image" src={`${item.image}`} />
                  <div className="product-info">
                    <div className="product-name">{item.title} </div>
                    <div className="product-desc">{item.description} </div>
                    <div className="product-price">R{item.price} </div>                                
                  </div>

                  <button onClick={() => addToCart(item)} className="cart-btn">Add To Cart</button>
        </div> 
      </div>
  );
}

export default ItemPage;
