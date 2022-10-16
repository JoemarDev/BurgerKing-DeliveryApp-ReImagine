
import { GetProductPriceRange  , GetMealChoices} from '../../utils/app-functions.utils';

import './product-card.styles.scss';

const ProductCard = ({product}) => {



    const {image , name  , description} = product;
    

    const ProductPriceRange  = GetProductPriceRange(product);

    const ShowMealChoices = () => GetMealChoices(product);

    return (
        <div className="product-card-container" >
            <div className="product-image-container" onClick={ShowMealChoices}>
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
        </div>
    )
}

export default ProductCard;