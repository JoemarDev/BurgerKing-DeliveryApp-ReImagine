import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import './cart-button.styles.scss';

const CartButton = () => {

    const {isCartOpen , setIsCartOpen} = useContext(CartContext);
    
    const ToogleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <button className="cart-button" onClick={ToogleCart}>
            <img src={`${process.env.PUBLIC_URL}/icons/bag.svg`} alt="bag"/>
            <span className="total-cart-item">(0)</span>
            <span className="cart-amount">$0.00</span>
            
        </button>
    )
}

export default CartButton;