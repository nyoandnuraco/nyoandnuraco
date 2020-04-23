import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartContextProvider from '../contexts/CartContext'

class Template extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <Container>
        <CartContextProvider>
          <Navigation />
          {children}
        </CartContextProvider>
      </Container>
    )
  }
}

export default Template
