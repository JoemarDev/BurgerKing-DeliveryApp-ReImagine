import './user-image-name.styles.scss';
import { Fragment } from 'react';
import { signOutUser } from '../../utils/firebase.utils';
import { useNavigate } from 'react-router-dom';
const UserImageName = ({user}) => {

    const navigate = useNavigate();

    const LogoutUser = () => signOutUser();

    const GoToOrders = () => navigate('/orders');
    
    return (
        <Fragment>
            <button className="profile-button" onClick={GoToOrders}>
                <img className='profile-image' src={user.photoURL} alt={user.displayName} />
            </button>
            <div>
                <label>Hello, {user.displayName.split(' ')[0]}</label>
                <label className='logout-button' onClick={LogoutUser}>Logout</label>
            </div>
        </Fragment>               
    )
}

export default UserImageName;