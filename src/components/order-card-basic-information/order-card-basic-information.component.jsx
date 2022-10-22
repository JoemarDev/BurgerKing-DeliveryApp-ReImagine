import { useEffect, useState } from 'react';
import { GetAllOrdersTotalAmount } from '../../utils/app-functions.utils';
import { FormatToMoney } from '../../utils/basic.utils';
import './order-card-basic-information.styles.scss';

const OrderCardBasicInformation = ({orders}) => {

    const [TotalOrderAmount , setTotalOrderAmount] = useState(0);

    useEffect(() => {
        let total = GetAllOrdersTotalAmount(orders);
        setTotalOrderAmount(total);
    },[orders]);

    return (
        <div className="order-basic-information">
            <img className='order-icons' src={`${process.env.PUBLIC_URL}/icons/burger.svg`} alt="" />
            <div className='info'>
                <h3>{orders.length} Items</h3>
                <p className='order-time'>Ordered : 7:15 PM</p>
                <p className='total-order-amount'>Total : P {FormatToMoney(TotalOrderAmount)}</p>
            </div>
          
        </div>
    )
}

export default OrderCardBasicInformation