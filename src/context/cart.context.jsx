import { createContext, useEffect, useState } from "react";


const addCartItem = (cart , item) => {
    const isExists = cart.find((i) => i['product']['id'] === item['product']['id']);

    if(isExists) {
        return cart.map((cartItem) => {
            return cartItem['product']['id'] === item['product']['id']
            ? {...cartItem , 'product-quantity' : cartItem['product-quantity'] + 1} 
            : cartItem
        });
    }
    
    return [...cart , item];
};

const CountCartTotalItems = (cart) => {
    let count = 0;

    cart.map((item) => count += item['product-quantity']);

    return count;
}

const ComputerCartTotalAmount = (cart) => {
    let TotalAmount = 0;

    cart.map((item) => {
        let quantity = item['product-quantity'];

        let productPrice = item['product']['price'] ?? item['product']['price_levels']['0']['price'];
        TotalAmount += (productPrice * quantity);

        let addOnsPrice = 0;
        Object.keys(item['product-add-ons']).map((i) => {
            item['product-add-ons'][i].map((x) => {
                return addOnsPrice += x.price;
            })
        })


        TotalAmount += (addOnsPrice * quantity);

    })

    return TotalAmount;
}


export const CartContext = createContext({
    cartTotalAmount : 0,
    cartTotalItems : 0,
    cartItems : [],
    isCartOpen : false,
    setIsCartOpen : () => {},
});

export const CartProvider = ({children}) => {

    const [cartTotalAmount , setCartTotalAmount] = useState(0);

    const [cartTotalItems , setCartTotalItems] = useState(0);

    const [cartItems , setCartItems] = useState([]);

    const [isCartOpen , setIsCartOpen] = useState(false);

    const addItemToCart = (item) => setCartItems(addCartItem(cartItems , item));

    const getCartTotalItems = () =>  setCartTotalItems(CountCartTotalItems(cartItems));

    const getCartTotalItemsAmount = () => setCartTotalAmount(ComputerCartTotalAmount(cartItems));


    useEffect(() => {
        getCartTotalItems();
        getCartTotalItemsAmount();
    },[cartItems]);


    const value = {
        cartTotalAmount,
        cartItems, 
        isCartOpen,  
        cartTotalItems,
        addItemToCart,
        setIsCartOpen 
    };
    
    

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}