import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { FormatToMoney } from "../../utils/basic.utils";
import './cart-button.styles.scss';

const CartButton = () => {

    const {
        isCartOpen , 
        setIsCartOpen , 
        cartTotalItems ,
        cartTotalAmount
    } = useContext(CartContext);
    

    const ToogleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <button className="cart-button" onClick={ToogleCart}>
            <img src={`${process.env.PUBLIC_URL}/icons/bag.svg`} alt="bag"/>
            <span className="total-cart-item">({cartTotalItems})</span>
            <span className="cart-amount">₱ {FormatToMoney(cartTotalAmount)}</span>
            
        </button>
    )
}

export default CartButton;