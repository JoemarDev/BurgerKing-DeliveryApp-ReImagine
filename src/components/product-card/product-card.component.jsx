/* eslint-disable */
import { useState } from 'react';
import { GetProductPriceRange  , GetMealChoices} from '../../utils/app-functions.utils';
import ViewProduct from '../view-product/view-product.component';

import './product-card.styles.scss';

const ProductCard = ({product}) => {


    const [isProductViewed , setIsProductViewed] = useState(false);

    const {image , name  , description} = product;
    
    const ProductPriceRange  = GetProductPriceRange(product);

    const ShowMealChoices = () => GetMealChoices(product);
    

    const ToogleProductView = () => setIsProductViewed(!isProductViewed);
    

    return (
        <div className="product-card-container" >
            <div className="product-image-container c-pointer" onClick={ToogleProductView} >
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
            {isProductViewed && <ViewProduct product={product} close={ToogleProductView}/>}
            
        </div>
    )
}

export default ProductCard;