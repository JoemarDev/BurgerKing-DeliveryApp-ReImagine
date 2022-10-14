import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import './product-header.styles.scss';

const ProductHeader = ({customTitle,  ...otherProps}) => {

    const {productHeaderTitle} = useContext(ProductsContext);
        
    return (
        <div className="product-header c-pointer" {...otherProps}>
            <h2>{customTitle ? customTitle : productHeaderTitle}</h2>
        </div>
    )
}

export default ProductHeader;