import './view-product-quantity.styles.scss';

const ViewProductQuantity = ({quantity , DecrementQuantity , IncrementQuantity}) => {
    return (
        <div className="view-product-quantity">
            <div className="view-product-quanity-title">
                <label>Quantity : {quantity}</label>
            </div>
            <div className="view-product-quanity-buttons">
                <button className={`${quantity > 1 ? '' : 'disabled'}`} onClick={DecrementQuantity}>&#8722;</button>
                <button onClick={IncrementQuantity}>&#43;</button>
            </div>
        </div>
    )
}

export default ViewProductQuantity;