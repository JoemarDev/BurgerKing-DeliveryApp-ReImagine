import { useEffect , useState} from "react";
import { GetProductCategories } from "../../utils/app-functions";

const Category = () => {

    const [categories , setCategories] = useState([]);

    useEffect(() => {
        setCategories(GetProductCategories());
    },[]);

    return (
        <div className="categories-section">
            <ul>
                {categories.map((item,index) => {
                    const {name} = item;
                    const {thumbnail_small} = item.image;
                    return (
                        <li key={index}>
                            <img src={thumbnail_small} alt={name}/>
                            {name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Category;