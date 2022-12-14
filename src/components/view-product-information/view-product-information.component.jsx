/* eslint-disable */
import { useContext, useEffect, useRef } from "react";
import { TempBasketContext } from "../../context/temp-basket.context";
import {  GetProductPriceRange } from "../../utils/app-functions.utils";
import ProductAllergens from "../product-allergens/product-allergens.component";
import ViewProductAddOns from "../view-product-add-ons/view-product-add-ons.component";
import ViewProductQuantity from "../view-product-quantity/view-product-quantity.component";

import './view-product-information.styles.scss';

const ViewProductInformation = ({product}) => {

  
    const {setCurrentMenuScroll}  = useContext(TempBasketContext);

    const scrollRef = useRef();

    const {name  , description ,allergens , modifier_groups} = product;

    const ProductPrice = GetProductPriceRange(product);

    useEffect(() => {

        const onScroll = e => {
            setCurrentMenuScroll(scrollRef.current.scrollTop)
        };

        scrollRef.current.addEventListener("scroll", onScroll);
      
        return () => {
            if(!scrollRef.current) return;
            scrollRef.current.removeEventListener("scroll", onScroll)
        };
    },[]);



    return (
        <div className="view-product-informations" ref={scrollRef}>
            <h3>{name}</h3>
            <label>₱ {ProductPrice}</label>
            <p>{description}</p>

            { allergens &&  <ProductAllergens allergens={allergens}/>}

            <div className="divider"></div>
            
            <ViewProductQuantity  />

            {modifier_groups  && modifier_groups?.map((item , index) => <ViewProductAddOns key={index} addons={item}/>)}
                
        </div> 
    )
}

export default ViewProductInformation;