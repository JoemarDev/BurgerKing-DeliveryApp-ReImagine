import './user-image-name.styles.scss';
import { Fragment } from 'react';
import { signOutUser } from '../../utils/firebase.utils';
const UserImageName = ({user}) => {

    const LogoutUser = () => signOutUser();

    return (
        <Fragment>
            <button className="profile-button">
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