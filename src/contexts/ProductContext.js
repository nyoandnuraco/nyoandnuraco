import React, { createContext, useReducer, useEffect } from 'react';
import { productReducer } from '../reducers/productReducer';
const defaultState = {
    package:'',
    price:799,
    id:1
  }
  
  export const ProductContext = React.createContext(defaultState)
//export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, dispatch] = useReducer(productReducer, [], () => 
    { if (typeof window !== 'undefined') {
        const localData = localStorage.getItem('products');
        return localData ? JSON.parse(localData) : [];
    }
    });
  
    useEffect(() => {
       
        if (typeof window !== 'undefined') {
             localStorage.setItem('products', JSON.stringify(products))}
    }, [products]);
    return ( 
        <ProductContext.Provider value={{products, dispatch}}>
            { props.children }
        </ProductContext.Provider>
     );
}
 
export default ProductContextProvider;