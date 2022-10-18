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

                            const product = item.product;
                            const productQuantity = item['product-quantity'];
                            const productAddOns = item['product-add-ons'];
                            

                            const {name , image } = product;
                            return(
                                <li key={index}>
                                    <img src={image.thumbnail_small} alt="" />
                                    {name}
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