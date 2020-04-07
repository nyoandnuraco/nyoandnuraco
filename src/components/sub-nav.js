import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from './nyoandnuralogo.png';
import icon from './shopping-cart-icon.jpg';
export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
   
      <li className={styles.navigationItem}>
        <Link to="/shop/neldolight/">Neldo Light</Link>
      </li>
      
    </ul>
  </nav>
)
