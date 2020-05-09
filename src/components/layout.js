import React from "react";
import ReactDOM from "react-dom"
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "../contexts/CartContext";
import SlideNav from "./SlideNav";
import ProductContextProvider from "../contexts/ProductContext";
import Checkout from "../pages/checkout";

class Template extends React.Component {
    componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://checkout.stripe.com/checkout.js";
    script.async = true;
    script.dataKey="{{stripePublishableKey}}"; 
    script.dataAmount="250000"; 
    script.dataName="nyoandnuraco"; 
    script.dataDescription="Neldo package";
    script.dataImage="./nyoandnuralogo.png"; 
    script.dataLocale="auto";
    document.body.appendChild(script);
} 
  render() {
    
    const { children } = this.props;
    return (
      <ProductContextProvider id="template">
        <CartContextProvider>
       
   

  
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
