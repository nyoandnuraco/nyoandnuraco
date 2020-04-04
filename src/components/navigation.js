import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from './nyoandnuralogo.png';
export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/"><img height="100%" width="100%" src={logo}/></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/shop/">Shop</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/ourwork/">Our Work</Link>
      </li>
    </ul>
  </nav>
)
