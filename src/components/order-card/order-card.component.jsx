import { useEffect, useState } from 'react';
import { GetProductByID } from '../../utils/app-functions.utils';
import OrderCardBasicInformation from '../order-card-basic-information/order-card-basic-information.component';
import OrderDetailedInformation from '../order-detailed-information/order-detailed-information.component';
import './order-card.styles.scss';

const OrderCard = ({order}) => {

    const {orderDetails , createdAt} = order;

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let od = [];
        
        orderDetails.map((item) => {
            let obj = item;
            obj.product = GetProductByID(item['product_id']);
            od = [...od , obj];
        });

        setOrders(od);
    },[]);
    
    return (
        <div className="order-card">
            <OrderCardBasicInformation orders={orders} />
            <OrderDetailedInformation orderDetails={orders}/>

        </div>
    )
}

export default OrderCard;