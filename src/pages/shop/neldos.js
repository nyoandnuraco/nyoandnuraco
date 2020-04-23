import React, { useState } from 'react';
import uuid from 'uuid/v1';
import AddPackageForm from './addPackageForm';

const Neldos = () => {
    const [products, setProducts] = useState([
        { package: 'neldo', id:1 }
    ]);
    const addProduct = (pkg) => {
        setProducts([...products, { package: pkg, id: uuid()}]);
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
            <AddPackageForm addProduct={addProduct} />
        </div>
    )
}
export default Neldos;