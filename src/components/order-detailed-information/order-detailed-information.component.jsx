import { GetProductAddOnsPrice, GetSingleOrdersTotalAmount } from '../../utils/app-functions.utils';
import OrderTotalInformation from '../order-total-information/order-total-information.component';
import { FormatToMoney } from '../../utils/basic.utils';
import './order-detailed-information.styles.scss';
import { GetProductAddOnsName } from '../../utils/app-functions.utils';
const OrderDetailedInformation = ({orderDetails}) => {
    
    
    const GetAddOnsTotalPrice = (addOns, product) => {
        let totalAmount = 0;

        {addOns.ids.map((id) => {
            totalAmount +=  GetProductAddOnsPrice(product , addOns.name , id);
        })}

        return totalAmount;
    }
    return (
        <div className="order-detailed-information">
            {orderDetails.map((item,index) => {
                  const {addOns, product} = item;
                const {image , name } = product;
              

                return (
                    <div className="order-detailed-list" key={index}>
                        <div className="inner-flex">
                            <img className='order-image' src={image.thumbnail_small} alt={name} />
                            <p className='order-quantity'>{item.quantity}</p>
                            <p className='order-name'>{name}</p>
                            <p className='order-amount'>₱ {FormatToMoney(GetSingleOrdersTotalAmount(item))}</p>
                        </div>
                        <div className="add-ons-details">
                            {addOns.ids.map((id,index) => (
                                <span key={index}>{GetProductAddOnsName(item.product , addOns.name , id)}</span>
                            ))}
                            <span>₱ {FormatToMoney(GetAddOnsTotalPrice(addOns , product))}</span>
                        </div>
                    </div>
                )
            })}

            <OrderTotalInformation orders={orderDetails}/>
        </div>
    )
}

export default OrderDetailedInformation;