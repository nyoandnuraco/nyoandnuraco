import React, { createContext, useReducer, useEffect } from 'react';
import uuid from 'uuid/v1';
import { productReducer } from '../reducers/productReducer';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, dispatch] = useReducer(productReducer, []);

    return ( 
        <ProductContext.Provider value={{products, dispatch}}>
            { props.children }
        </ProductContext.Provider>
     );
}
 
export default ProductContextProvider;