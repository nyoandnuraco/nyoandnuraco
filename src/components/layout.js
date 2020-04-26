import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "../contexts/CartContext";
import SlideNav from "./SlideNav";
import ProductContextProvider from "../contexts/ProductContext";
import Cart from "../pages/cart";

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ProductContextProvider>
        <CartContextProvider>
 
  <SlideNav/><br/><br/><br/>
          <Container>
            <Navigation />
            {children}
          </Container>
        </CartContextProvider>
      </ProductContextProvider>
    );
  }
}

export default Template;
