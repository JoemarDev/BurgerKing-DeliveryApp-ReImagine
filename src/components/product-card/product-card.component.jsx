import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './product-card.styles.scss';

const ProductCard = ({product}) => {

    const {addItemToCart} = useContext(CartContext);

    const {image , name } = product;

    const AddToCart = () => addItemToCart(product);
    
    return (
        <div className="product-card-container" >
            <div className="product-image-container">
                {image && 
                    <img src={image?.thumbnail_small} alt={name}/>
                }
            </div>
            <label className="product-title">{name}</label>  
            <button onClick={AddToCart}>Order</button>
        </div>
    )
}

export default ProductCard;