import { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductLists from "../../components/product-lists/product-lists.component";
import { ProductsContext } from "../../context/products.context";
import Category from "../../components/category/category.component";
const MealCategory = () => {

    const {meal_type} = useParams();
    
    const {GetProductByCategory} = useContext(ProductsContext);
    
    useEffect(() => {
        GetProductByCategory(meal_type);
    },[meal_type]);

    return (
        <Fragment>
            <Category />
            <ProductLists />
        </Fragment>
      
    )
}

export default MealCategory;