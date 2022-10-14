import { createContext, useEffect, useState } from "react";
import { 
    GetRecommendedProduct , 
    GetCategoryProducts , 
    GetProductBySearch
} from "../utils/app-functions";

const setProductByCategory = (category_name) => {
    return GetCategoryProducts(category_name);
}

const setProductBySearch = (keyword) => {
    return GetProductBySearch(keyword);
}

export const ProductsContext = createContext({
    products : {},
});


export const ProductsProvider = ({children}) => {
    const [products , setProducts] = useState([]);

    const [productHeaderTitle , setProductHeaderTitle] = useState("Featured");

    useEffect(() => {
        GetCategoryProducts();
        const productsResult = GetRecommendedProduct();
        setProducts(productsResult);
        GetProductBySearch("cheese");
    },[]);

    const GetProductByCategory = (category_name) => {
        setProductHeaderTitle(category_name)
        setProducts(setProductByCategory(category_name));
    }

    const GetproductBySearch = (keyword) => {
        
        let title = `Result for : ${keyword}`;
        if(!keyword) title = "Featured";

        setProductHeaderTitle(title)
        setProducts(setProductBySearch(keyword));
    }

    const value = {products , GetProductByCategory , GetproductBySearch , productHeaderTitle};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}