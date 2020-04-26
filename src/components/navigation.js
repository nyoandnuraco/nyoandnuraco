import React, { Component, useContext } from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from './nyoandnuralogo.png';
import icon from './shopping-cart-icon.png';
import ItemCounter from './item-counter';
import CartContextProvider, { CartContext } from '../contexts/CartContext';
import SlideNav from './SlideNav';
import { ProductContext } from '../contexts/ProductContext'
const Navbar = () => {
const {redCounter, noItems, cartCount } = useContext(CartContext);
const { products } = useContext(ProductContext);
 return( 
 <nav className={styles.mainnav} role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">
          <img alt="logo" className="logo" height="100%" width="100%" src={logo}/>
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/shop/">Shop</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/ourwork/">Our Work</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
     
        <Link to="/cart/">
          <div className={styles.cartItems}>
          <ItemCounter />
          {products.length}
              <img alt="cart" className={styles.cartimg} height="100%" width="64px" src={icon}/>
          </div>
        </Link>
      </li>
      <li>
  
      </li>
    </ul>
  </nav>

)
}

export default Navbar
