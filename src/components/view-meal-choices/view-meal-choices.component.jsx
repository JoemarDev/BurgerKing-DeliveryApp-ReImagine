import { Fragment } from "react";
import { FormatToMoney } from "../../utils/basic.utils";
import './view-meal-choices.styles.scss';
const ViewMealChoices = ({combo , pickHandler , close}) => {

    return (
        <Fragment>
            <div className="view-meal-choices-overlay"></div>
            <div className="view-meal-choices-container">
                <button className="close-combo-view" onClick={close}>&#x2715;</button>
                <h2>Choose combo</h2>
                <ul>
                    {combo.map((item,index) => {
                        const {name , image , price} = item;
                        return (
                            <li key={index} onClick={() => pickHandler(item)}>
                                <div className="view-meal-choices-image">
                                    <img src={image.thumbnail_small} alt={name} />
                                </div>
                                <div className="view-meal-choices-basic-information">
                                    <span className="view-meal-choices-combo-name">{name}</span>
                                    <span className="view-meal-choice-price">₱ {FormatToMoney(price)}</span>
                                </div>
                                <img className="carret-icon" src={`${process.env.PUBLIC_URL}/icons/carret-right.svg`} alt="" />
                              
                            </li>
                        )
                    })}
                
                </ul>
            </div>
        </Fragment>
    )
}

export default ViewMealChoices;