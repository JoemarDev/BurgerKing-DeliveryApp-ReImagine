/* eslint-disable */
import { createContext, useState } from "react";

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

export const TempBasketContext = createContext({
    currentItems : [],
    currentAddOns : [],
    currentMenuScroll : 0 ,
});

export const TempBasketProvider = ({children}) => {

    const [currentMenuScroll , setCurrentMenuScroll] = useState(0);

    const [currentItems , setCurrentItems] = useState([]);

    const [currentAddOns , setCurrentAddOns] = useState([]);

    const HandleBasketAddOns = (toAddData) => setCurrentAddOns(UpdateTempBasketAddOns(currentAddOns , toAddData));

    
    const value = {
        currentItems,
        currentAddOns,
        currentMenuScroll,
        setCurrentMenuScroll,
        HandleBasketAddOns,
    }

    return <TempBasketContext.Provider value={value}>{children}</TempBasketContext.Provider>
}