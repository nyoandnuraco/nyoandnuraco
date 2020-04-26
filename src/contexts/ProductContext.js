import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([
        {package: 'Neldo Light', price: 699, id:1},
        {package: 'Neldo', price: 2999, id:2},
        {package: 'Neldo Champ', price: 4999, id:3}
    ]);

    const addProduct = (pkg, price) => {
        setProducts([...products, {package: pkg, price, id: uuid()}]);
    };
    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };
    return ( 
        <ProductContext.Provider value={{products, addProduct, removeProduct}}>
            { props.children }
        </ProductContext.Provider>
     );
}
 
export default ProductContextProvider;