import React, { Component, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from '../contexts/ProductContext';
const ItemCounter = () => {
  const { redCounter, cartCount, noItems } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const counter = cartCount ? redCounter : noItems;
  return ( 

    <span
    id="cartcount"
    style={{
      backgroundColor: counter.backgroundColor,
      color: counter.color,
      borderRadius: counter.borderRadius,
      fontSize: counter.fontSize,
      padding: counter.padding,
      height: counter.height,
      marginTop: counter.marginTop,
      paddingBottom: counter.paddingBottom,
      marginRight: counter.marginRight,
      paddingTop: counter.paddingTop,
      content: products.length !== 0 ? `${products.length}` : "",
    }}
  >  
{/*products.length > 0 ? products.length : ""*/}
  </span>

   );
}

export default ItemCounter;
