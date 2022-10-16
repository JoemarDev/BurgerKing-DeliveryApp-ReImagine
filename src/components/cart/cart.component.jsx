import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart.styles.scss';
const Cart = () => {

    const {cartItems} = useContext(CartContext);

    useEffect(() => {
        document.body.style.overflowY = "hidden";

        return () => {
            document.body.style.overflowY = "scroll";
        }
    },[]);
    

    return (
        <>
            <div className='cart-overlay'></div>
            <div className="cart-container">
                <div>
                    <label>You're Cart is empty.</label>
                    <ul>
                        {cartItems.map((item,index)=> {
                            const {name , image , price_levels} = item;
                          
                            return(
                                <li key={index}>
                                    <img src={image.thumbnail_small} alt="" />
                                    {name}
                                    {price_levels[0].price / 100}
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
               
            </div>
        </>
    )
}

export default Cart;