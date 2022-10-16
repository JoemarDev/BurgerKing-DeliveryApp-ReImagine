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


const GetComboMealsPriceRange = (combo_meal) => {

    let MinPrice = 0;
    let MaxPrice = 0;
    
    combo_meal.map((combo,index) => {
        const {combo_groups} = combo;
        combo_groups.map((item) => {
            if(item.type_id == 1) {
                const {combo_items} = item;
                
                combo_items.map((ci,index) => {
                    const price = ci.price;
                    if(MinPrice == 0) return MinPrice = price;
                    if(MaxPrice == 0) return MaxPrice = price;

                    if(price < MinPrice) return MinPrice = price;
                    if(price > MaxPrice) return MaxPrice = price;
                })
            }
        })
    })

    return `${MinPrice / 100} - ₱ ${MaxPrice / 100} `;

}
export const GetProductPriceRange = (product) => {

    if(product.price_levels) {
        const {price_levels} = product;

        if(price_levels[0]['price'] === price_levels[price_levels.length - 1]['price']) {
            return price_levels[0]['price'] / 100;
        }

        if(price_levels[0]['price'] !== price_levels[price_levels.length - 1]['price']) {
            return `${price_levels[price_levels.length - 1]['price'] / 100} - ₱ ${price_levels[0]['price'] / 100} `;
        }
    }   
   

    if(product.combo_meals) {
        const {combo_meals} = product;

        return GetComboMealsPriceRange(combo_meals);
        
    }
}



export const GetMealChoices = (meal) => {

    let meal_choices = [];

    if(meal.combo_meals) {
        const {combo_meals} = meal;
        
        combo_meals.map((item) => {
            const {combo_groups} = item;
            combo_groups.map((i) => {
                if(i.type_id == 1) {
                    const {combo_items} = i;
                    combo_items.map((res) => {
                        console.log(res);
                        meal_choices = [...meal_choices , res];
                    })
                }
            })
        })
        console.log(meal_choices);
        return meal_choices;
    }

    console.log("No Fucking Combo Meal!!")
    return "No Fucking Combo Meal!!";

}