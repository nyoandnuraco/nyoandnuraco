import React from "react";

const Main = () => {
return (<form action="/charge" method="POST">
      <script
        src="https://checkout.stripe.com/checkout.js"
        className="stripe-button"
        data-key="{{stripePublishableKey}}"
        data-amount="250000"
        data-name="nyoandnuraco"
        data-description="Neldo package"
        data-image="/images/nyoandnuralogo.png"
        data-locale="auto"
      ></script>
     
      <button
        type="submit"
        className="btn btn-outline-dark text-white btn-lg cta"
      >
        Purchase $2500
      </button>
     
    </form>)
};
export default Main;
