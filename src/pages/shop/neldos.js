import React, { useState } from 'react';
import uuid from 'uuid/v1';
const Neldos = () => {
    const [products, setProducts] = useState([
        { package: 'neldo', id:1 }
    ]);
    const addProduct = () => {
        setProducts([...products, { package: 'neldo', id: uuid()}]);
    }
    return(
        <div>
            <ul>
                {products.map(product => { 
                    return ( 
                    <li key={product.id}>
                    {product.package}
                    </li>
                    )
                })}
            </ul>
            <button onClick={addProduct}>Add To Cart</button>
        </div>
    )
}
export default Neldos;