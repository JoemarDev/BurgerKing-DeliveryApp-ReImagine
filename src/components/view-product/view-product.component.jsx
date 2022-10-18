/* eslint-disable */
import { Fragment, useContext, useEffect, useState } from "react";

import { TempBasketContext } from "../../context/temp-basket.context";

import ViewProductInformation from "../view-product-information/view-product-information.component";
import ViewProductTotalPrice from "../view-product-total-price/view-product-total-price";

import './view-product.styles.scss';

const ViewProduct = ({product , close}) => {

    const {name , image } = product;

    const {currentMenuScroll , ResetTempBasket , setTempBasketProduct} = useContext(TempBasketContext);

    const [elemScrollTop , setElemScrollTop] = useState();

    useEffect(() => {
        document.body.style.overflowY = "hidden";

        setTempBasketProduct(product);
        
        return () => {
            document.body.style.overflowY = "scroll";
            ResetTempBasket();
        }
    },[]);

    useEffect(() => {
        setElemScrollTop(currentMenuScroll);
    },[currentMenuScroll]);


    return (
       <Fragment>
            <div className="view-product-overlay"></div>
            <div className="view-product-container">
                <div className="view-product-inner-wrapper">

                    {image && 
                        <div className="view-image-product">
                            <img className="product-image" src={image?.fullsize} alt={name} />
                        </div>
                    }

                    <div className="view-product-options">
                        <div className={`view-product-options-header ${elemScrollTop > 20 ? 'show-top' : ''}`}>
                            <h3>{name}</h3>
                            <button className="close-view-product" onClick={close}>&#x2715;</button>
                        </div>

                        <ViewProductInformation product={product}/>
                        <ViewProductTotalPrice  close={close}/>
                    </div>

                  
                </div>
            </div>
       </Fragment>
    )
}

export default ViewProduct;