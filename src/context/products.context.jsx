
import { createContext,  useState } from "react";
import { 
    GetCategoryProducts , 
    GetProductBySearch
} from "../utils/app-functions.utils";

const setProductByCategory = (category_name) => {
    return GetCategoryProducts(category_name);
}

const setProductBySearch = (keyword) => {
    return GetProductBySearch(keyword);
}

export const ProductsContext = createContext({
    products : [],
});


export const ProductsProvider = ({children}) => {

    const [products , setProducts] = useState([]);

    const [productHeaderTitle , setProductHeaderTitle] = useState("Featured");
    
    const [searchKeyword , setSearchKeyWord] = useState('');


    const GetProductByCategory = (category_name) => {
        setProductHeaderTitle(category_name)
        setProducts(setProductByCategory(category_name));
    }

    const GetproductBySearch = (keyword) => {
        setSearchKeyWord(keyword);
        let title = `Result for : ${keyword}`;
        if(!keyword) title = "Featured";
        setProductHeaderTitle(title);
        setProducts(setProductBySearch(keyword));
    }

    const value = {products , searchKeyword , GetProductByCategory , GetproductBySearch , productHeaderTitle};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}