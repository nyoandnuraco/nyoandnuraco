import React from 'react'
import styles from './cart.module.css'
import Layout from '../components/layout'


class Cart extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
        <br/>
       <h1 className={styles.header}>Checkout</h1>
       <br/>
       <div className={styles.checkout}>
        <span id={styles.active} className={styles.step}>1</span>
        <div className={styles.progressbar}></div>
        <span className={styles.step}>2</span>
        <div className={styles.progressbar}></div>
        <span className={styles.step}>3</span>
        <div className={styles.progressbar}></div>
        <span className={styles.step}>4</span>
       </div>
      </Layout>
    )
  }
}

export default Cart

