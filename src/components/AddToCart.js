import React, { Component } from 'react';
import { CartContext } from '../contexts/CartContext'

class  AddToCart extends Component {
    static contextType = CartContext;
    render() { 
        const { addToCart } = this.context;
        return ( 
            <button onClick={addToCart}>Add To Cart</button>
         );
    }
}
 
export default AddToCart;