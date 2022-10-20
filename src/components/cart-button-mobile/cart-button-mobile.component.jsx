
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { FormatToMoney } from "../../utils/basic.utils";
import './cart-button-mobile.styles.scss';

const CartMobileButton = () => {
    const {
        isCartOpen , 
        setIsCartOpen , 
        cartTotalItems ,
        cartTotalAmount
    } = useContext(CartContext);
    

    const ToogleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <button className="cart-mobile-button" onClick={ToogleCart}>
        
            <span className="total-cart-item">({cartTotalItems})</span>
            <span className="cart-amount">P {FormatToMoney(cartTotalAmount)}</span>
           <span> View Order</span>
        </button>
    )
}

export default CartMobileButton;

