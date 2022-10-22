
import { Routes , Route } from "react-router-dom";
import Header from "./components/header/header.component";
import MealCategory from "./routes/meal-category/meal-category";
import Meal from "./routes/meal/meal.component";
import Orders from "./routes/orders/orders";
const App = () => {
	
  	return (
    	<>
			<div className="container">
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<Meal />}></Route>
						<Route index path="meal/:meal_type" element={<MealCategory />}></Route>
						<Route index path="orders" element={<Orders />}></Route>
					</Route>
				</Routes>
				
			</div>
    	</>
  	);
}

export default App;