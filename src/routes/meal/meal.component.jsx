
import { useContext } from "react";
import Category from "../../components/category/category.component";
import PreviewLists from "../../components/preview-list/preview-lists.component";
import ProductLists from "../../components/product-lists/product-lists.component";
import { ProductsContext } from "../../context/products.context";


const Meal = () => {

    const {searchKeyword} = useContext(ProductsContext);

    return (
        <>
            <Category />
            {!searchKeyword 
                ? <PreviewLists/>
                : <ProductLists />
            }
        </>
    )
}

export default Meal;