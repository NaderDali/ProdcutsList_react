import { createContext, useContext, useState } from "react";
import productDummyData from "../dummydata/products.json";


const ProductsContext= createContext(null);
export const useProductContext=()=> {
    return useContext(ProductsContext);
}

function ProductsContextProvider({children}){
    const [products,setProducts] = useState([productDummyData]);
    const[cart, setCart]=useState([]);
    const isInCart=(product )=> {
        return cart.find(e=>e.id===product.id)
    };
    const addToCart=(product)=> {
        const cartProduct=cart.find(e=>e.id===product.id);
        if(cartProduct){
            cartProduct.count++;
            setCart([...cart]);

        } else {
            setCart([
                ...cart,
                {...product,count:1}
            ]);

        }

    };
    const removeFromtCart=(product)=>{
        const cartProduct= cart.find(e=>e.id===product.id);
        if(cartProduct){
            if(cartProduct.count===1){
                setCart(
                    cart.filter(e=>e.id!==product.id)
                );
            }else {
                cartProduct.count--;
                setCart([...cart]);
            }
        }

    };
    const value= {
        products,
        cart,
        addToCart,
        removeFromtCart,
        isInCart
    };
    return(
        // eslint-disable-next-line no-undef
        <ProductsContext.Provider value={value}>
        {children}
        </ProductsContext.Provider>

    )
}
export default ProductsContextProvider;