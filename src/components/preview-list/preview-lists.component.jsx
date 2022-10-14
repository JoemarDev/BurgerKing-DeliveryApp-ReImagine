import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetMenuPreview } from "../../utils/app-functions";
import ProductHeader from "../product-header/product-header.component";

const PreviewLists = () => {

    const [preview , setPreview] = useState();
    
    const navigate = useNavigate();

    useEffect(() => {
        setPreview(GetMenuPreview());
    },[]);

    const NavigateToMeal = (name) => {
        navigate(`/meal/${name}`)
    }
    return (
        <Fragment>
            {preview && preview.map((item,idx) => {

                const {name , menu} = item;

                return (
                    <Fragment key={idx}>
                        <ProductHeader customTitle={name} onClick={() => NavigateToMeal(name)} />
                        <div className="product-lists">
                            {menu.map((product , index) => {
                                const {image , name } = product;
                                
                                return (
                                    <div className="product-card-container" key={index}>
                                        <div className="product-image-container">
                                            {image && 
                                                <img src={image?.thumbnail_small} alt={name}/>
                                            }
                                        </div>
                                        <label className="product-title">{name}</label>  
                                    </div>
                                )
                            })}
                        </div>
                </Fragment>
                )
            })}
           
        </Fragment>
    )
}

export default PreviewLists;