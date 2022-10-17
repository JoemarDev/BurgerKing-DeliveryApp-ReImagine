const ProductAllergens = ({allergens}) => {
    return (
        <div className="product-allergens">
            <label>Allergens : </label>
            <ul className="product-lists-allergens">
                {allergens.map((item , index) => (
                    <li key={index}>{item['id']},</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductAllergens;