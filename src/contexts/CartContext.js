import React, { createContext, Component, Children } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    state = { 
        cartCount: 1,
        neldolight: { 
            price: 699, 
            quantity: 1 
        },
        neldo: { 
            price: 2999, 
            quantity: 1 
        },
        neldochamp: { 
            price: 4999, 
            quantity: 1 
        },
       noItems: {
            display: "none",
            visibility:"hidden"
        },
        redCounter: {
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            fontSize: "12px",
            position: "absolute",
            padding: "16px",
            paddingTop:"13px",
            marginTop: "-25px",
            marginLeft: "82vw",
            height:"15px",
            textAlign: "center"
        }
     }
    render() { 
        return (
            <CartContext.Provider value={{...this.state}}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartContextProvider;