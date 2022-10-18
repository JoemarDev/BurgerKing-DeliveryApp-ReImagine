import { useContext } from 'react';
import { TempBasketContext } from '../../context/temp-basket.context';
import './view-product-quantity.styles.scss';

const ViewProductQuantity = () => {

    const { 
        incrementTempProductQuantity,
        decrementTempProductQuantity,
        productQuantity,
    } = useContext(TempBasketContext);
    
    const incrementHanlder = () => incrementTempProductQuantity();

    const derementHandler = () => decrementTempProductQuantity();

    return (
        <div className="view-product-quantity">
            <div className="view-product-quanity-title">
                <label>Quantity : {productQuantity}</label>
            </div>
            <div className="view-product-quanity-buttons">
                <button className={`${productQuantity > 1 ? '' : 'disabled'}`} onClick={derementHandler}>&#8722;</button>
                <button onClick={incrementHanlder}>&#43;</button>
            </div>
        </div>
    )
}

export default ViewProductQuantity;