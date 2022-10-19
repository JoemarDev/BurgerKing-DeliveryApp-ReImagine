import { useContext } from 'react';
import { TempBasketContext } from '../../context/temp-basket.context';
import './view-product-total-price.styles.scss';
import { FormatToMoney } from '../../utils/basic.utils';
import { CartContext } from '../../context/cart.context';

const ViewProductTotalPrice = ({close ,updateOn}) => {
    const {tempProductPrice} = useContext(TempBasketContext);

    const {
        currentAddOns,
        productQuantity,
        currentProduct
    } = useContext(TempBasketContext);

    const {addItemToCart , updateItemFromCart} = useContext(CartContext);

    const AddProductToCart = () => {

        let product = {
            "product" : currentProduct,
            "product-quantity" : productQuantity,
            "product-add-ons" : currentAddOns,
        };

        if(updateOn) {
            updateItemFromCart(product)
        } else {
            addItemToCart(product);
        }
      
        close();
    }

    return (
        <>
            <button className='view-product-total-price' onClick={AddProductToCart}>
                <label>P {FormatToMoney(tempProductPrice)}</label>
                <label>{updateOn ? 'Update' : 'Add'}</label>
            </button>
        </>
    )
}

export default ViewProductTotalPrice;