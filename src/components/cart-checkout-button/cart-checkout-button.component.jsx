
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { FormatToMoney } from '../../utils/basic.utils';
import './cart-checkout-button.styles.scss';


const CartCheckoutButton = ({close}) => {

    const {cartTotalAmount} = useContext(CartContext);

    return (
        <>
            <button className='cart-checkout-button' >
                <label>P {FormatToMoney(cartTotalAmount ?? 0)}</label>
                <label>Checkout</label>
            </button>
        </>
    )
}

export default CartCheckoutButton;