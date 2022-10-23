import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { siginInWithGooglePopup } from "../../utils/firebase.utils";
import UserImageName from "../user-image-name/user-image-name.component";
import './user-info-button.styles.scss';
const UserInfoButton = () => {

    const {currentUser} = useContext(UserContext);

    
    const SignInWithGoogle = async () => {
        await siginInWithGooglePopup();
    }


    return (
        <div className="user-info-button">
            {currentUser ? 
                (<UserImageName user={currentUser} />)
                :
                (
                    <button onClick={SignInWithGoogle}>
                        <img src={`${process.env.PUBLIC_URL}/icons/user.svg`} alt="user"/>
                    </button>
                )
            }
        </div>
    )
}


export default UserInfoButton;