import React, { Component } from 'react';
import { CartContext } from '../contexts/CartContext'

class ItemCounter extends Component {
    static contextType = CartContext;
    render() { 
        console.log(this.context);
        const { redCounter, noItems, cartCount } = this.context;
        const counter = cartCount ? redCounter : noItems;
        return (
              <span style={{ 
                backgroundColor: counter.backgroundColor, 
                color: counter.color, 
                borderRadius: counter.borderRadius, 
                fontSize: counter.fontSize,
                padding: counter.padding,
                height: counter.height,
                marginTop: counter.marginTop,
                paddingBottom: "25px",
                marginRight: "-20px",
                paddingTop:counter.paddingTop,
                content: cartCount !== 0 ? `${cartCount}` : ''
                }}>{cartCount > 0 ? cartCount : ''}
            </span> 
        );
    }
}
 
export default ItemCounter;