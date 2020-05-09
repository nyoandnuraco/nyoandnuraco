import React from "react";
import logo from "./nyoandnuralogo.png";
import styles from './main.css';
const Main = () => {



return (<form action="/charge" method="POST">
  
      <script
        src="https://checkout.stripe.com/checkout.js"
        class="stripe-button"
        data-key="{{stripePublishableKey}}"
        data-amount="250000"
        data-name="nyo and nura"
        data-description="Neldo package"
        data-image={logo}
        data-locale="auto" 
        id={styles.secondarycta}
      ></script>
   
    <button type="submit" class="btn btn-outline-dark text-white btn-lg cta">Purchase $2500</button>
 
     
    </form>)
};
export default Main;
