import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartContextProvider from '../contexts/CartContext'
import AddToCart from './AddToCart'
class Template extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <CartContextProvider>
      <AddToCart />
      <Container>
  

          <Navigation />
        
          {children}
   
    
      </Container>
      </CartContextProvider>
    )
  }
}

export default Template
