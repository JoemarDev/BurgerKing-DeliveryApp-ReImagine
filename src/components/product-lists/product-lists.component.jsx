import { Fragment, useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductHeader from "../product-header/product-header.component";
import './product-lists.styles.scss'

const ProductLists = () => {

    const { products } = useContext(ProductsContext);

    return (
        <Fragment>
            <ProductHeader />
            <div className="product-lists">
                {products && products.map((product , index) => {
                    const {image , name } = product;
                    
                    return (
                        <div className="product-card-container" key={index}>
                            <div className="product-image-container">
                                {image && 
                                    <img src={image?.thumbnail_small} alt={name}/>
                                }
                            </div>
                            <label className="product-title">{name}</label>  
                        </div>
                    )
                })}
            </div>
        </Fragment>
    );
}

export default ProductLists;