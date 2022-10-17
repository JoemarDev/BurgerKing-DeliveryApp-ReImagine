import { useContext } from 'react';
import { TempBasketContext } from '../../context/temp-basket.context';
import AddOnsOptions from '../add-ons-options/add-ons-options.component';
import './view-product-add-ons.styles.scss';

const ViewProductAddOns = ({addons}) => {

    const {name , max_selected , modifiers} = addons;
    const { HandleBasketAddOns }  = useContext(TempBasketContext);
   

    const AddOnsChangeHandler = (addons) => {

        HandleBasketAddOns({name, max_selected, addons});

    }


    return (
        <>
            <div className='adds-ons-container'>
                <div className="add-ons-header">
                    <span>{name}</span>
                    {max_selected === 1 && <span className='max-selected'>Select up to {max_selected}</span>}
                </div>

                <div className="divider"></div>

                {modifiers.map((item,index) => (
                    <AddOnsOptions 
                        key={index} 
                        modifiers={item} 
                        array_key_name={name}
                        changeHanlder={() => AddOnsChangeHandler(item)}
                    />
                ))}
                
            </div>
        </>
    )
}

export default ViewProductAddOns;
