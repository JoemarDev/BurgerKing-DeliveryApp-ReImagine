import './header.styles.scss';

const Header = () => {
    return (
        <div className="menu-section">
            {/* Left Section */}
            <div className="left-section">
                <button className="menu-button">
                    <img src="icons/menu-bars.svg" alt="menu" />
                </button>
                <h2>Order <span>Something</span></h2>
            </div>

            {/* Center Section */}
            <div className="center-section">
                <div className="search-container">
                    <input className='search-input' type="text" placeholder="Search"/>
                    <img className="search-icon" src="icons/search.svg" alt="search" />
                </div>
            </div>

            {/* Right Section */}

            <div className="right-section">
                <button className="cart-button">
                    <img src={'icons/bag.svg'} alt="bag"/>
                </button>
                <button className="profile-button">
                    Joemar
                </button>
                <label>Hello, Joemar</label>
            </div>
        </div>
    )
}

export default Header;