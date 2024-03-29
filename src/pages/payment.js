import React from 'react'

class Payment extends React.Component{
    render(){
        return(<form action="/charge" method="POST">
    <script src="https://checkout.stripe.com/checkout.js" class="stripe-button" 
    data-key="{{stripePublishableKey}}" 
    data-amount="250000" 
    data-name="nyoandnuraco" 
    data-description="Neldo package" 
    data-image="/images/nyoandnuralogo.png" 
    data-locale="auto">
    </script>
    <script>
        //hide default stripe button 
        document.getElementsByClassName('stripe-button-el')[0].style.display = 'none';
    </script>
    <button type="submit" class="btn btn-outline-dark text-white btn-lg cta">Purchase $2500</button>
    <script>
        document.getElementsByClassName('cta')[0].style.background = '#0146c9';
    </script>
</form>)
    }
}

export default Payment;