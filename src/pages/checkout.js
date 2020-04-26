import React from 'react';
import CartCheckout from './shop/cartcheckout';
class Checkout extends React.Component{
    render(){
        const checkout = {
            textAlign:"center",
            marginLeft:"0px",
            paddingLeft:"0px",
            width:"80vw"
        }
        return(
            <div>
      <CartCheckout/>
            </div>
        )
    }
}

export default Checkout