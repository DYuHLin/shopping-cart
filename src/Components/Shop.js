import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Shop() {

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const parsedData = await data.json();
    console.log(parsedData);
    setItems(parsedData);
  };

  useEffect(() => {
    fetchItems();
  },[]);

  return (
      <div className="shopPage">
          <div className="title">Shop Page</div>

          <div className="items">
            {items.map((item) => {
              return(
                <Link to={`/shop/${item.id}`}>               
                  <div key={item.id} className="card">
                  <img className="product-image" src={`${item.image}`} />
                  <div className="product-info">
                    <div className="product-name">{item.title} </div>
                    <div className="product-price">R{item.price} </div>                                
                  </div>
                  </div> 
                </Link> 
              )
            })}
              
          </div>
      </div>
  );
}

export default Shop;
