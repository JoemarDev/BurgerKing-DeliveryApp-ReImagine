import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { FormatToMoney } from '../../utils/basic.utils';
import './cart-total-amount.styles.scss';

const CartTotalAmount = () => {

    const {cartTotalAmount } = useContext(CartContext);

    const SubTotal = cartTotalAmount * 0.88;

    const VAT = cartTotalAmount * 0.12;


    return (
                            
        <div className="cart-total-amount-section">
            <div className='cart-total-info-list'>
                <label className='section-title'>Subtotal :</label>
                <label className='section-amount'>
                    <span>₱ {FormatToMoney(SubTotal)}</span>
                </label>
            </div>

            <div className='cart-total-info-list'>
                <label className='section-title'>VAT inclusive (12.00%)</label>
                <label className='section-amount'>
                    <span>₱ {FormatToMoney(VAT)}</span>
                </label>
            </div>

            <div className='cart-total-info-list'>
                <label className='section-title'>Total Amount :</label>
                <label className='section-amount'>
                    <span className='total-amount'>P {FormatToMoney(cartTotalAmount)}</span>
                </label>
            </div>
       
    </div>
    )
}

export default CartTotalAmount;