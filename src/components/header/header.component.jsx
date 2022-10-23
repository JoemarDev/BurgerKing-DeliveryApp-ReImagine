import { Fragment, useContext } from 'react';
import { Outlet, useNavigate,  } from 'react-router-dom';
import Search from '../search/search.component';
import './header.styles.scss';
import Cart from '../cart/cart.component';
import { CartContext } from '../../context/cart.context';
import CartButton from '../cart-button/cart-button.component';
import CartMobileButton from '../cart-button-mobile/cart-button-mobile.component';
import UserInfoButton from '../user-info-button/user-info-button.component';
const Header = () => {



    const {isCartOpen} = useContext(CartContext);

    const navigate  = useNavigate();

    const GoToHome = () => {
        navigate('/');
    }


    return (
        <Fragment>
            <div className="menu-section">
                {/* Left Section */}
                <div className="left-section">
                    <h2 onClick={GoToHome}>
                        <img className="brand-icon" src={`${process.env.PUBLIC_URL}/icons/brand.png`} alt="menu" />
                    </h2>
                </div>

                {/* Center Section */}
                <div className="center-section">
                    <Search />
                </div>

                {/* Right Section */}

                <div className="right-section">
                   <CartButton />
                   <UserInfoButton />
                </div>

                {isCartOpen && <Cart/>}
                    
                <div className="mobile-user-info">
                    <UserInfoButton />
                </div>

            </div>



            <CartMobileButton />
            <Outlet />
        </Fragment>
    )
}

export default Header;