import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'


const AddToCart = () => {
    const { addToCart } = useContext(CartContext)
    return (
        <button onClick={addToCart}>Add To Cart</button>
    );
}
 
export default AddToCart;
