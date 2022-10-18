/* eslint-disable */
import { createContext, useEffect, useState } from "react";

const UpdateTempBasketAddOns = (currentAddOns ,toAddData)  => {
    const {name , addons , max_selected} = toAddData;
  
    let arr = [];

    if(currentAddOns[name]) {

        arr = [...currentAddOns[name]];

        const exists = arr.find((item) => item.id  === addons.id);

        if(exists) {
            const  filterArr =  arr.filter((item) => item.id !== addons.id);
            return {...currentAddOns , [name] : filterArr};
        }

        if(max_selected <= arr.length) {
            return {...currentAddOns , [name] : [addons]};
        }

        arr = [...arr , addons];
        return {...currentAddOns , [name] : arr};
    }


    return {...currentAddOns , [name] : [...arr , addons]};
}

const GetTotalProductAmount = (quantity , addOns , product) => {
    if(!product) return 0;

    let ProductPrice = 0;

    if(product['price_levels']) {
        ProductPrice = product['price_levels'][0]['price']
    } else {
        ProductPrice = product['price'];
    }

    return (addOns * quantity) + (ProductPrice * quantity);

}

export const TempBasketContext = createContext({
    currentProduct : null,
    tempProductPrice : 0,
    productQuantity : 1,
    addOnPrice : 0,
    currentAddOns : [],
    currentMenuScroll : 0 ,
});

export const TempBasketProvider = ({children}) => {

    const [currentProduct , setCurrentProduct] = useState();
    
    const [tempProductPrice , setTempProductPrice] = useState(0);

    const [productQuantity , setProductQuantity] = useState(1);

    const [addOnPrice , setAddOnsPrice] = useState(0);

    const [currentMenuScroll , setCurrentMenuScroll] = useState(0);

    const [currentAddOns , setCurrentAddOns] = useState([]);

    const HandleBasketAddOns = (toAddData) => setCurrentAddOns(UpdateTempBasketAddOns(currentAddOns , toAddData));


    const ResetTempBasket = () => {
        setCurrentAddOns([]);
        setCurrentMenuScroll(0);
        setAddOnsPrice(0);
        setProductQuantity(1);
        setCurrentProduct(null);
        setTempProductPrice(0);
    }

    const incrementTempProductQuantity = () => setProductQuantity(productQuantity + 1);

    const decrementTempProductQuantity = () => setProductQuantity(productQuantity <= 1 ? 1 : productQuantity - 1);

    const setTempBasketProduct = (product) => setCurrentProduct(product);

    useEffect(() => {
        setTempProductPrice(GetTotalProductAmount(productQuantity , addOnPrice , currentProduct));
    },[productQuantity , addOnPrice , currentProduct]);
    
    useEffect(() => {
        let defaultPrice = 0;

        Object.keys(currentAddOns).map((i) => {
            currentAddOns[i].map((item) =>  defaultPrice += item.price);
        })

        setAddOnsPrice(defaultPrice);

    },[currentAddOns]);

    const value = {
        currentProduct,
        addOnPrice,
        currentAddOns,
        currentMenuScroll,
        productQuantity,
        tempProductPrice,
        setCurrentMenuScroll,
        HandleBasketAddOns,
        ResetTempBasket,
        incrementTempProductQuantity,
        decrementTempProductQuantity,
        setTempBasketProduct,
    }
    

    return <TempBasketContext.Provider value={value}>{children}</TempBasketContext.Provider>
}