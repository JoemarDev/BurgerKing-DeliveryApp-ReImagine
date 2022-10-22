/* eslint-disable */
import { createContext, useEffect, useState } from "react";


const GetAddOnsId = (arr) => {
    if(arr['product-add-ons'].length === 0) return 0;
    return arr['product-add-ons'][Object.keys(arr['product-add-ons'])[0]][0]['id']
}
const addCartItem = (cart , item) => {


    const isExists = cart.find((i) => 
        (
            i['product']['id'] === item['product']['id'] 
            && GetAddOnsId(i) === GetAddOnsId(item)
        )
    );


    if(isExists) {
        return cart.map((cartItem) => {
            return cartItem['product']['id'] === item['product']['id'] && GetAddOnsId(cartItem) === GetAddOnsId(item)
            ? {...cartItem , 'product-quantity' : cartItem['product-quantity'] + item['product-quantity']} 
            : cartItem
        });
    }


    return [...cart , item];
};

const updateCartItem =(cart , item) => {
    
    return cart.map((cartItem) => {
        return cartItem['product']['id'] === item['product']['id']
        ? item
        : cartItem
    });

    
}

const removeCartItem = (cart , item) => {

    return cart.filter((i,index) => {

       return  (index !== item)
    })
}

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

    const removeItemToCart = (item) => setCartItems(removeCartItem(cartItems , item));

    const updateItemFromCart = (item) => setCartItems(updateCartItem(cartItems , item));

    const getCartTotalItems = () =>  setCartTotalItems(CountCartTotalItems(cartItems));

    const getCartTotalItemsAmount = () => setCartTotalAmount(ComputerCartTotalAmount(cartItems));


    const ResetCart = () => {
        setCartItems([]);
        setIsCartOpen(false);
    }


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
        removeItemToCart,
        setIsCartOpen,
        updateItemFromCart,
        ResetCart
    };
    
    

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}