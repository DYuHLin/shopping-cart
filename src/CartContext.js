import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [items, setItems] = useState([]);

    const addToCart = (obj) => {
        if(items.includes(obj)){
            return;
        }

        setItems((prevItems) => [...prevItems, obj]);
        
    };
    console.log(items);
    const deleteCart = (index) => {
        setItems(oldValues => {
            return oldValues.filter(exp => exp.id !== index)
        });
    };

    const incQuantity = (index) => {
        const newArr = items.map((obj) => {
            if(index === obj.id){
                return{...obj, quantity: obj.quantity + 1,
                    multiplier: obj.multiplier + 1,
                    total: obj.price * obj.multiplier}           
            } else {
                return obj;
            };
        });
        setItems(newArr);
    };

    const getTotal = () => {
        let totalAmount = 0;
        for(const cart in items){
            totalAmount += items[cart].price * items[cart].quantity;
        }

        return totalAmount;
    };

    const decQuantity = (index) => {
        const newArr = items.map((obj) => {
            if(index === obj.id){
                return{...obj, quantity: obj.quantity - 1,
                    multiplier: obj.multiplier - 1,}
            } else if(index === obj.id && obj.quantity <= 1){
                const decBtn = document.getElementById("dec-btn").disabled = true;
                return obj;
            } else {
                return obj;
            };
            
        });
        setItems(newArr);
    };

    return(
        <CartContext.Provider value = {{items, addToCart, deleteCart, incQuantity, decQuantity, getTotal}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;