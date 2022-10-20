import { Fragment, useContext, useEffect } from 'react';
import { CartContext } from '../../context/cart.context';
import CartCheckoutButton from '../cart-checkout-button/cart-checkout-button.component';
import CartEmptyPlaceHolder from '../cart-emplty-placeholder/cart-empty-placeholder.component';
import CartItemLists from '../cart-item-lists/cart-item-lists.component';
import CartTotalAmount from '../cart-total-amount/cart-total-amount.component';
import './cart.styles.scss';
const Cart = () => {

    const {cartItems , setIsCartOpen} = useContext(CartContext);

    useEffect(() => {
        document.body.style.overflowY = "hidden";

        return () => {
            document.body.style.overflowY = "scroll";
        }
    },[]);

    const closeCart = () => setIsCartOpen(false);

    return (
        <>
            <div className='cart-overlay'></div>
            <div className="cart-container">
                <div className='inner-cart-container'>
                    <h2 className='cart-header-title'>My Order</h2>
                    <button className='mobile-close-cart' onClick={closeCart}>&#x2715;</button>
                    {cartItems.length > 0  && <CartItemLists cartItems={cartItems}/> }

                    {cartItems.length === 0 &&  <CartEmptyPlaceHolder />}
                   
                    {cartItems.length > 0 &&
                        <Fragment>
                            <CartTotalAmount/>
                            <CartCheckoutButton />
                        </Fragment>
                    }

                </div>
               
            </div>
        </>
    )
}

export default Cart;