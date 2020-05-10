import React from "react";
import logo from "./nyoandnuralogo.png";
import styles from "./main.css";
import keys from '../../config/keys';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
var stripePublishableKe = keys.stripePublishableKey;
const stripePromise = loadStripe(keys.stripePublishableKey);

const Main = () => {
  return (
    <Elements stripe={stripePromise}>
    <form action="/charge" method="POST">
      <script
        src="https://checkout.stripe.com/checkout.js"
        class="stripe-button"
        data-key={stripePublishableKe}
        data-amount="250000"
        data-name="nyo and nura"
        data-description="Neldo package"
        data-image={logo}
        data-locale="auto"
        id={styles.secondarycta}
      ></script>
      <button type="submit" class="btn btn-outline-dark text-white btn-lg cta">
        Purchase $2500
      </button>
    </form>
</Elements>
  );
};
export default Main;
