import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [items, setItems] = useState([]);

    const addToCart = (obj) => {
        if(items.includes(obj)){
            let newItems = items;
            newItems[obj.id].quantity = newItems[obj.id].quantity +1;
            setItems(newItems);
            console.log(items);
        } else {
            setItems((prevItems) => [...prevItems, obj]);
            console.log(items);
        };
    };

    return(
        <CartContext.Provider value = {{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;