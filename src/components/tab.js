import React from 'react'
import { Link } from 'gatsby'
import styles from '../pages/shop.module.css'

export default () => (
    <nav className={styles.subnav}>
    <div className="container">
      <Link id={window.location.href.split('/')[4] === "neldolight" ? styles.active : styles.inactive}
        className={styles.item + " navbar-brand"}
        to="/shop/neldolight"
      >
        Neldo Light
      </Link>
      <Link id={window.location.href.split('/')[4] === "neldo" ? styles.active : styles.inactive}
        className={styles.item + " navbar-brand"}
        to="/shop/neldo"
      >
        Neldo
      </Link>
      <Link id={window.location.href.split('/')[4] === "neldochamp" ? styles.active : styles.inactive}
        className={styles.item + " navbar-brand"}
        to="/shop/neldochamp"
      >
        Neldo Champ
      </Link>
    </div>
  </nav>
)
