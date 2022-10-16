/* eslint-disable */
import Product from '../JSON/Product.json';

export const GetProductCategories =  () => {
    let Categroies = [];

    const results = Product['menu']['categories'][0]['subcategories'];

     results.map((item,index) => {
        const data = {
            'id' : item.id,
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

export const GetCategoryProducts = (category_name) => {

    let ProductLists = [];

    const results = Product['menu']['categories'][0]['subcategories'];

    results.map((category) => {
        if(category.name == category_name) {
            category.menu_items.map((item) => {
                ProductLists = [...ProductLists ,item];
            })

            category.menu_combo_meals.map((item) => {
                ProductLists = [...ProductLists ,item];
            })
        }
    });

    return ProductLists;
}

export const GetProductBySearch = (keyword) => {
    if(!keyword) return GetRecommendedProduct();

    let ProductLists = [];

    const results = Product['menu']['categories'][0]['subcategories'];

    results.map((item) => {
        item.menu_items.filter((product) => {
            const {name} = product;
            return name.toLowerCase().includes(keyword.toLowerCase())
        }).map((res) => {
            ProductLists = [...ProductLists , res];
        })

        item.menu_combo_meals.filter((product) => {
            const {name} = product;
            return name.toLowerCase().includes(keyword.toLowerCase())
        }).map((res) => {
            ProductLists = [...ProductLists , res];
        })
    })

    return ProductLists;
}

export const GetMenuPreview = () => {
    let ProductLists = [];
    const results = Product['menu']['categories'][0]['subcategories'];

    results.map((item) => {
        let data = {
            name : item.name,
            menu : [],
        }

        item.menu_items.map((m,index) => {
            if(index > 3) return;
            data['menu'] = [...data['menu'],m];
        });

        if(data.menu.length == 0){
            item.menu_combo_meals.map((m,index) => {
                if(index > 3) return;
                data['menu'] = [...data['menu'],m];
            });
        }

        ProductLists = [...ProductLists , data];
    })
    

    return ProductLists;
}