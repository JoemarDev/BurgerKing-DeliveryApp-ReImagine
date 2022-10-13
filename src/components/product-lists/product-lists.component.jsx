import { useEffect, useState } from "react";
import {  GetRecommendedProduct } from "../../utils/app-functions";

const ProductLists = () => {

	const [featuredProduct , setFeaturedProduct] = useState([]);
    
	useEffect(() => {
		setFeaturedProduct(GetRecommendedProduct());
	},[]);

    return (
        <div className="product-lists">
            {featuredProduct && featuredProduct.map((product , index) => {
               
                const {image , name  , category_name} = product;
    
                return (
                    <div className="product-card-container" key={index}>
                        <img src={image.thumbnail_small} alt={name}/>
                        <label className="product-title">{name}</label>
                        <span className="star-icon"></span>
                        <span className="rate">4.5</span>
                        <span className="location">Deep Cafe</span>
                        <span className="categories">{category_name}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default ProductLists;