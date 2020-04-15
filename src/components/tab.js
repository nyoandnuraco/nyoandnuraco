import React from 'react'
import { Link } from 'gatsby'
import styles from '../pages/shop.module.css'

export default () => (
    <nav className={styles.subnav}>
    <div className="container">
      <Link id={typeof window !== 'undefined' ? window.location.href.split('/')[4] === "neldolight" ? styles.active : styles.inactive : ''}
        className={styles.item + " navbar-brand"}
        to="/shop/neldolight"
      >
        Neldo Light
        <span className={styles.border}></span>
      </Link>
      <Link id={typeof window !== 'undefined' ? window.location.href.split('/')[4] === "neldo" ? styles.active : styles.inactive : ''}
        className={styles.item + " navbar-brand"}
        to="/shop/neldo"
      >
        Neldo
        <span className={styles.border}></span>
      </Link>
      <Link id={typeof window !== 'undefined' ? window.location.href.split('/')[4] === "neldochamp" ? styles.active : styles.inactive : ''}
        className={styles.item + " navbar-brand"}
        to="/shop/neldochamp"
      >
        Neldo Champ
        <span className={styles.border}></span>
      </Link>
    </div>
  </nav>
)
