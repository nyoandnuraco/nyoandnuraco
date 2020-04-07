import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from './nyoandnuralogo.png';
import icon from './shopping-cart-icon.png';
export default () => (
  <nav className={styles.mainnav} role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/"><img alt="logo" className="logo" height="100%" width="100%" src={logo}/></Link>
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
          <img alt="cart" className={styles.cartimg} height="100%" width="100%" src={icon}/>
          <span className={styles.cartcount}>1</span></div>
        </Link>
      </li>
    </ul>
  </nav>
)
