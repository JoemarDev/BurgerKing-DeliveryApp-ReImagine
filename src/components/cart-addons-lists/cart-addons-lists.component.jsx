import { FormatToMoney } from "../../utils/basic.utils";
import './cart-addons-lists.styles.scss';
const CartAddOnsLists = ({productAddOns , AddOnsTotalPrice}) => {
    return (
            <div className="add-ons-list-container">
                {Object.keys(productAddOns).map((key_name) => (
                    productAddOns[key_name].map((item,index) => (
                        <div className='add-ons-lists' key={index}>
                            <span>{item.name}</span>
                        </div>
                    ))
                ))}
                {AddOnsTotalPrice !== 0 &&  <span className=''>(+ ₱{FormatToMoney(AddOnsTotalPrice)})</span>}
            </div>
    )
}

export default CartAddOnsLists;