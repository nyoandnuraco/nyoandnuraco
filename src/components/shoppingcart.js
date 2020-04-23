import React from 'react'
export const ShoppingCart = (props) => {
    if(props.items.length === 0){
        return(
            <div className="scEmptyCart">
                Nothing In Cart
            </div>
        )
    } else
        return(
            <div className="scShoppingCart" id="shoppingCartScroll">
fdasf
            </div>
        )
    
}