import { Fragment } from 'react';
import { Outlet, useNavigate,  } from 'react-router-dom';
import Search from '../search/search.component';
import './header.styles.scss';

const Header = () => {

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
                    <button className="cart-button">
                        <img src={`${process.env.PUBLIC_URL}/icons/bag.svg`} alt="bag"/>
                    </button>
                    <button className="profile-button">
                        Joemar
                    </button>
                    <label>Hello, Joemar</label>
                </div>
            </div>

            <Outlet />
        </Fragment>
    )
}

export default Header;