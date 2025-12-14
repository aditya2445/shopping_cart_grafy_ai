import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const existingInCart = cart.find(item => item.id === product.id)
        if(existingInCart) {
            let editItemQuantity = cart.map(item => item.id === product ? {...item, quantity: item.quantity + 1} : item);
            setCart(editItemQuantity);
        } else {
            setCart([...cart, {...product, quantity: 1}]);
        }
    }
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
    const updateQuantity = (id, qty) => {
        if (qty <= 0) {
            removeFromCart(id);
        } else {
            setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: qty } : item
            ));
        }
    };


    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
};