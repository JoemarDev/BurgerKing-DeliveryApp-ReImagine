import { Fragment, useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../product-card/product-card.component";
import ProductHeader from "../product-header/product-header.component";
import './product-lists.styles.scss'

const ProductLists = () => {

    const { products } = useContext(ProductsContext);

    return (
        <Fragment>
            <ProductHeader />
            <div className="product-lists">
                {products && products.map((product , index) => (
                    <ProductCard product={product} key={index}/>  
                ))}
            </div>
        </Fragment>
    );
}

export default ProductLists;