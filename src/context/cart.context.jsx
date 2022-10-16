import { createContext, useEffect, useState } from "react";


const addCartItem = (cart , item) => {
    
    const isExists = cart.find((i) => i.id === item.id);

    if(isExists) {
        return cart.map((cartItem) => {
            return cartItem.id === item.id 
            ? {...cartItem , quantity : cartItem.quantity + 1} 
            : cartItem
        })
    }

    return [...cart , {...item , quantity : 1}];
};


export const CartContext = createContext({
    cartItems : [],
    isCartOpen : false,
    setIsCartOpen : () => {},
});

export const CartProvider = ({children}) => {

    const [cartItems , setCartItems] = useState([]);

    const [isCartOpen , setIsCartOpen] = useState(false);

    const addItemToCart = (item) => setCartItems(addCartItem(cartItems , item));


    useEffect(() => {

    },[cartItems]);
    
    const value = {cartItems , isCartOpen ,  addItemToCart , setIsCartOpen};
    

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}