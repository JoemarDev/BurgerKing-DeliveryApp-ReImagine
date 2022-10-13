/* eslint-disable */
import Product from '../JSON/Product.json';

export const GetProductCategories =  () => {
    let Categroies = [];

    const results = Product['menu']['categories'][0]['subcategories'];

     results.map((item,index) => {
        const data = {
            'name' : item.name,
            'image' : item.image,
        }
        return Categroies = [...Categroies , data];
    });

    return Categroies;
}


export const GetRecommendedProduct = () => {
    let RecommendedProducts = [];

    const results = Product['menu']['categories'][0]['subcategories'];

     results.map((item,index) => {

        const {menu_items , name} = item;

        const category_name = name;

        menu_items.map((menu,idx) => {

            const {image , description , id  , name , price_levels} = menu;

            if(idx > 0) return;
            RecommendedProducts = [...RecommendedProducts , {
                image, 
                description, 
                id , 
                name, 
                price_levels,
                category_name
            }];
        })
    });

    return RecommendedProducts;
}