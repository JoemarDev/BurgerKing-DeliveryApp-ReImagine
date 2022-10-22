import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
import { GetUserOrders } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import OrderCard from "../../components/order-card/order-card.component";
import './order.styles.scss';
const Orders = () => {

    const navigate = useNavigate();

    const {currentUser} = useContext(UserContext);

    const [orders , setOrders] = useState([]);
    
    useEffect(() => {
        if(!currentUser) return;
        // if(!currentUser) navigate('/');
        
        const GetUserOrderData = async() => {
            const OrdersResult = await GetUserOrders(currentUser);
            setOrders(OrdersResult);
        }

        GetUserOrderData();
    },[currentUser]);  

    return (
        <>
            <h2 className="page-title">You're Past Order's</h2>
            <div className="order-container">
                {orders.map((item, index) => (
                    <OrderCard key={index} order={item} />
                ))}
              
            </div>
        </>
    )
}

export default Orders;