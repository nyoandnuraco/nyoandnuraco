import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import AddPackageForm from './addPackageForm';

const Neldos = () => {
    const [products, setProducts] = useState([
        { package: 'neldo', price:699, id:1 }
    ]);
    const addProduct = (pkg) => {
        setProducts([...products, { package: pkg, id: uuid()}]);
    }
    useEffect(() => {
        console.log('useeffect hook run', products);
    })
    return(
        <div>
            <ul style={{display:"none"}}>
                {products.map(product => { 
                    return ( 
                    <li key={product.id}>
                    {product.package}
                    </li>
                    )
                })}
            </ul>
            <AddPackageForm addProduct={addProduct} />
        </div>
    )
}
export default Neldos;