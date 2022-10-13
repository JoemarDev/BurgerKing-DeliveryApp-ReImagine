
import AddressBanner from "./components/address-banner/address-banner.component";
import Category from "./components/category/category.component";
import Header from "./components/header/header.component";
import ProductLists from "./components/product-lists/product-lists.component";

const App = () => {

  	return (
    	<>
			<Header/>
			<AddressBanner />
			<Category />
			<ProductLists />
    	</>
  	);
}

export default App;