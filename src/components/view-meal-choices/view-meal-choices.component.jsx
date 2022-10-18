import { Fragment } from "react";
import './view-meal-choices.styles.scss';
const ViewMealChoices = ({combo , pickHandler}) => {

    return (
        <Fragment>
            <div className="view-meal-choices-overlay"></div>
            <div className="view-meal-choices-container">
                <h2>Choose combo</h2>
                <ul>
                    {combo.map((item,index) => {
                        const {name , image} = item;

                        return (
                            <li key={index} onClick={() => pickHandler(item)}>
                                <img src={image.thumbnail_small} alt={name} />
                                <span className="view-meal-choices-combo-name">{name}</span>
                            </li>
                        )
                    })}
                
                </ul>
            </div>
        </Fragment>
    )
}

export default ViewMealChoices;