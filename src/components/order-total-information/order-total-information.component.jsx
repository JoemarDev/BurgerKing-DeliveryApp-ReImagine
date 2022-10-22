import { useEffect, useState } from 'react';
import { GetAllOrdersTotalAmount } from '../../utils/app-functions.utils';
import { FormatToMoney } from '../../utils/basic.utils';
import './order-total-information.styles.scss';
const OrderTotalInformation = ({orders}) => {
    const [TotalOrderAmount , setTotalOrderAmount] = useState(0);

    useEffect(() => {
        let total = GetAllOrdersTotalAmount(orders);
        setTotalOrderAmount(total);
    },[orders]);

    return (
            <div className="order-total-information">
                <div className="inner-total-information">
                    <label>Subtotal : </label>
                    <label>P {FormatToMoney(TotalOrderAmount * 0.88)}</label>
                </div>
                <div className="inner-total-information">
                    <label>Vat Inclusive (12.00%) : </label>
                    <label>P {FormatToMoney(TotalOrderAmount * 0.12)}</label>
                </div>
                <div className="inner-total-information">
                    <label>Total Amount : </label>
                    <label className='total-amount-final'>P {FormatToMoney(TotalOrderAmount)}</label>
                </div>
            </div>
    )
}

export default OrderTotalInformation;