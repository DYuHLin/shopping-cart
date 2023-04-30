import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [items, setItems] = useState([]);

    const addToCart = (obj) => {
        for(let i = 0; i < items.length; i++){
            if(items[i].id === obj.id){
                return;
            }
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
                return{...obj, quantity: obj.quantity + 1}           
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

        return totalAmount.toFixed(2);
    };

    const decQuantity = (index) => {
        const newArr = items.map((obj) => {
            if(index === obj.id){
                return{...obj, quantity: obj.quantity - 1}
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