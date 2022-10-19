/* eslint-disable */
import {  useEffect, useState } from 'react';
import { GetProductPriceRange  , GetMealChoices} from '../../utils/app-functions.utils';
import ViewProduct from '../view-product/view-product.component';
import ViewMealChoices from '../view-meal-choices/view-meal-choices.component';
import './product-card.styles.scss';

const ProductCard = ({product}) => {

    const [currentViewProduct , setCurrentViewProduct] = useState(product);

    const [isProductViewed , setIsProductViewed] = useState(false);

    const [isChoiceProductView , setChoiceProductView] = useState(false);
    
    const [mealChoices , setMealChoices] = useState([]);

    const {image , name  , description} = product;
    
    const ProductPriceRange  = GetProductPriceRange(product);

    const ShowMealChoices = () => GetMealChoices(product);
    
    const ProductViewHandler = () => {
        let MealChoice = ShowMealChoices();
        if(!MealChoice) return setIsProductViewed(true);
        ToogleChoiceProductView();
        
    }
    
    const ProductViewClose = () => setIsProductViewed(false);

    const ComboViewClose = () => setChoiceProductView(false);

    const ToogleChoiceProductView = () => {
        setChoiceProductView(true);
        setMealChoices(ShowMealChoices());
    }


    const HandleViewComboProduct = (meal) => {
        setChoiceProductView(false);
        setCurrentViewProduct(meal);
        setIsProductViewed(true);
    }

    useEffect(() => {
        setCurrentViewProduct(product)
    },[product]);
    

    return (
        <div className="product-card-container">
            <div className="product-image-container c-pointer" onClick={ProductViewHandler} >
                {image 
                    ? <img src={image?.thumbnail_small} alt={name}/>
                    : "No Image"
                }
            </div>
            <div className='product-information-container'>
                <label className="product-title">{name}</label>  
                <label className='product-price'>₱ {ProductPriceRange}</label>
                <p className='product-description'>{description}</p>
            </div>
                
            {isProductViewed && <ViewProduct product={currentViewProduct} close={ProductViewClose}/>}
       
            {isChoiceProductView && <ViewMealChoices combo={mealChoices} close={ComboViewClose} pickHandler={HandleViewComboProduct}/> }
        </div>
    )
}

export default ProductCard;