import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function ItemPage() {

  const [item, setItem] = useState({});
  let {id} = useParams();

  const fetchItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  useEffect(() => {
    fetchItem();
  },[]);

  return (
      <div className="itemPage">
          <div className="title">
          Item
        </div>
        <div key={item.id} className="card">
                  <img className="product-image" src={`${item.image}`} />
                  <div className="product-info">
                    <div className="product-name">{item.title} </div>
                    <div className="product-price">R{item.price} </div>                                
                  </div>

                  <button className="cart-btn">Add To Cart</button>
        </div> 
      </div>
  );
}

export default ItemPage;
