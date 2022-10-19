import './cart-item-lists.styles.scss';
import { FormatToMoney } from '../../utils/basic.utils';
import CartAddOnsLists from '../cart-addons-lists/cart-addons-lists.component';
import { Fragment, useContext, useState } from 'react';
import { CartContext } from '../../context/cart.context';
import { TempBasketContext } from '../../context/temp-basket.context';
import ViewProduct from '../view-product/view-product.component';
const CartItemLists = ({cartItems}) => {

    const {removeItemToCart} = useContext(CartContext);

    const {setTempBasketToCustomize} = useContext(TempBasketContext);

    const removeItemToCartHandler = (item) => removeItemToCart(item);

    const [toUpdateProduct , setToUpdateProduct] = useState();

    const [isViewUpdateOrder , setViewUpdateOrder] = useState(false);

    const UpdateOrder = (product,quantity,addons) => {
        setTempBasketToCustomize(product,quantity,addons);
        setToUpdateProduct(product);
        setViewUpdateOrder(true);
    }
    
    const closeViewUpdateOrder = () => setViewUpdateOrder(false);
    
    return (
          <Fragment>
           
              <ul className='cart-item-lists'>

              {isViewUpdateOrder && <ViewProduct product={toUpdateProduct} close={closeViewUpdateOrder} updateOn={true}/>}

                {cartItems.map((item,index)=> {

                    const product = item.product;

                    const productQuantity = item['product-quantity'];

                    const productAddOns = item['product-add-ons'];
                    
                    const {name , image } = product;

                    const ListsPrice = (product.price ?? product.price_levels[0]['price']) * productQuantity;

            
                    const GetAddOnsTotal = () => {
                        let AddOnsTotalPrice = 0;

                        Object.keys(productAddOns).map((key_name) => {
                            productAddOns[key_name].map((addon) => {
                                AddOnsTotalPrice += addon.price;
                            })
                        })

                        return AddOnsTotalPrice;
                    }

                    const AddOnsTotalPrice = GetAddOnsTotal() * productQuantity;

                    const viewUpdateOrderHandler = () => UpdateOrder(product , productQuantity ,productAddOns);

                    return(
                        <li className="cart-lists-item-child" key={index}>

                            <img  onClick={viewUpdateOrderHandler} className="cart-item-image" src={image.thumbnail_small} alt="" />
                            <div className='cart-lists-information'>

                                <div className='inner-child-flex'>
                                    <span className='list-quantity'>{productQuantity}</span>
                                    <span className='list-title'>{name}</span>
                                    <span className='list-amount'>₱ {FormatToMoney(ListsPrice + AddOnsTotalPrice)}</span>
                                    <button className='list-remove' onClick={() => removeItemToCartHandler(index)}>&#x2715;</button>
                                </div>   
                                <CartAddOnsLists productAddOns={productAddOns} AddOnsTotalPrice={AddOnsTotalPrice}/>
                            </div>
                        </li>
                    )
                })}
                
            </ul>
          </Fragment>
        )
}

export default CartItemLists;