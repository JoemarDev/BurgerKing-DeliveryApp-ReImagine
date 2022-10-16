import { Fragment, useContext, useState } from 'react';
import { Outlet, useNavigate,  } from 'react-router-dom';
import Search from '../search/search.component';
import './header.styles.scss';


import { siginInWithGooglePopup } from '../../utils/firebase.utils';
import { UserContext } from '../../context/user.context';
import UserImageName from '../user-image-name/user-image-name.component';
import Cart from '../cart/cart.component';
const Header = () => {

    const [isCartOpen , setCartOpen] = useState(false);

    const {currentUser} = useContext(UserContext);

    const navigate  = useNavigate();

    const GoToHome = () => {
        navigate('/');
    }

    const SignInWithGoogle = async () => {
        await siginInWithGooglePopup();
    }

    const toogleCart = () => setCartOpen(!isCartOpen);

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
                    <button className="cart-button" onClick={toogleCart}>
                        <img src={`${process.env.PUBLIC_URL}/icons/bag.svg`} alt="bag"/>
                    </button>
                
                    {currentUser ? 
                        (<UserImageName user={currentUser}/>)
                        :
                        (
                            <button onClick={SignInWithGoogle}>
                                <img src={`${process.env.PUBLIC_URL}/icons/user.svg`} alt="user"/>
                            </button>
                        )
                    }
                </div>
                {isCartOpen && <Cart />}
                
            </div>

            <Outlet />
        </Fragment>
    )
}

export default Header;