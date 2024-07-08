import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/ProductsContext";
function ProductsListPage(){
    const {products} = useProductContext();
    return (
    <div className="product-list-page container">
        <h2>Popular products</h2>

        <div className="products-list">
            {products.map(product => (
                <ProductCard product={product}/>

            ))}
        </div>
    </div>
    );
}

export default ProductsListPage;