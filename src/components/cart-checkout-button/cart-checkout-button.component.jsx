
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/user.context';
import { GetReadySaveProductID } from '../../utils/app-functions.utils';
import { FormatToMoney } from '../../utils/basic.utils';
import { createOrderDocument } from '../../utils/firebase.utils';
import { siginInWithGooglePopup } from '../../utils/firebase.utils';
import './cart-checkout-button.styles.scss';


const CartCheckoutButton = ({close}) => {
    
    const {cartTotalAmount , cartItems , ResetCart} = useContext(CartContext);

    const {currentUser} = useContext(UserContext);
    
    const orderCheckOut = async () => {
        if(!currentUser) return siginInWithGooglePopup();
        const orderData = GetReadySaveProductID(cartItems);
        await createOrderDocument(currentUser, orderData);
        ResetCart();
    }

    return (
        <>
            <button className='cart-checkout-button' onClick={orderCheckOut}>
                <label>P {FormatToMoney(cartTotalAmount ?? 0)}</label>
                <label>{currentUser ? "Checkout" : "Sign In"}</label>
            </button>
        </>
    )
}

export default CartCheckoutButton;