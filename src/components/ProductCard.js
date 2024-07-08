import { useProductContext } from "../context/ProductsContext";
import CounterBox from "./CounterBox";

function ProductCard({product}){

    const {isInCart,addToCart, removeFromCart}=useProductContext();
    const handleAddtoCart=() =>{
        addToCart(product);
    };
    const handleremoveFromCart =() => {
        removeFromCart(product);
    };
    const cartProduct=isInCart(product);

    return (
        <div className="product.card">
            <div className="image">
                <img src={product.thumbnail}/>
            </div>
            <div className="details">
                <h2>{product.title}</h2>
                <div className="price">${product.price}</div>
            </div>
            {cartProduct ? (
                <CounterBox 
                add={handleAddtoCart}
                remove={handleremoveFromCart}
                count={cartProduct.count}
                
                />
            ):(
                <button
                     onClick={handleAddtoCart}
                className="add-to-cart-btn"
                >
                <i className="fa fa-cart-plus"></i>
                Add to Cart
                </button>

            )}
            
        </div>

    );
}
export default ProductCard;