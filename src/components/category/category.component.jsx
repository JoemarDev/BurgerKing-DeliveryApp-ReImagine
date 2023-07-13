import { useEffect, useState } from "react";
import { GetProductCategories } from "../../utils/app-functions.utils";
import Slider from "react-slick";

import Config from "./carousel.config.json";
import "slick-carousel/slick/slick.css";
import "./category.styles.scss";
import { useNavigate } from "react-router-dom";

const Category = () => {
	const navigate = useNavigate();
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		setCategories(GetProductCategories());
	}, []);

	const GoToMealPage = (category) => {
		navigate(`/meal/${category}`);
	};

	return (
		<div className="categories-section">
			<Slider {...Config}>
				{categories.map((item, index) => {
					const { name } = item;
					const { thumbnail_small = null } = item.image || {};

					if (thumbnail_small === null) return;
					return (
						<div
							className="category-wrapper"
							key={index}
							onClick={() => GoToMealPage(name)}>
							<div className="category-body">
								<div>
									<img
										className="category-image"
										src={thumbnail_small}
										alt={name}
									/>

									<span className="category-title"> {name}</span>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default Category;
