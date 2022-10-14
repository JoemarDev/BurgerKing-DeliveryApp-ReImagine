import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import './search.styles.scss';
const Search = () => {
    const {GetproductBySearch} = useContext(ProductsContext);

    const SearchChangeHandler = (e) => GetproductBySearch(e.target.value);

    return (
        <div className="search-container">
            <input className='search-input' type="text" placeholder="Search" onChange={SearchChangeHandler}/>
            <img className="search-icon" src={`${process.env.PUBLIC_URL}/icons/search.svg`} alt="search" />
        </div>
    )
};

export default Search;