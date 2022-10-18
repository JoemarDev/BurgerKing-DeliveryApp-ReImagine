
import { useContext, useEffect, useState } from 'react';
import { TempBasketContext } from '../../context/temp-basket.context';
import { FormatToMoney } from '../../utils/basic.utils';
import './add-ons.options.styles.scss';

const AddOnsOptions = ({modifiers , changeHanlder , array_key_name }) => {
    const {name ,price , id} = modifiers;

    const {currentAddOns} = useContext(TempBasketContext);

    const [isSelected , setIsSelected] = useState(false);

    useEffect(() => {

        if(!currentAddOns[array_key_name]) return;

        const data = currentAddOns[array_key_name].filter((item) => item.id === id);

        setIsSelected(data.length > 0);

    },[currentAddOns , array_key_name , id]);
   
    
    return (
        <div className="add-ons-options">
            <div className='add-ons-selector'>
                <button className={isSelected ? 'active' : ''} onClick={changeHanlder}>
                    <img src={`${process.env.PUBLIC_URL}/icons/check.svg`} alt="" />
                </button>
            </div>
            
            <div>
                <span className='adds-ons-name'>{name}</span>
                <span className='adds-ons-price'>
                    {price === 0 && "-"}
                    {price !== 0 && `+ ₱ ${FormatToMoney(price)}`}
                    
                </span>
            </div>
        
        </div>
    )
}

export default AddOnsOptions;