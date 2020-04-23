import React, { Component } from "react";
import { CartContext } from "../contexts/CartContext";

class ItemCounter extends Component {
  render() {
    return (<CartContext.Consumer>{(context) => {
          const {  noItems, cartCount, redCounter } = context;
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
                content: cartCount !== 0 ? `${cartCount}` : "",
              }}
            >
              {cartCount > 0 ? cartCount : ""}
            </span>
          );
        }}</CartContext.Consumer>
    );
  }
}

export default ItemCounter;
