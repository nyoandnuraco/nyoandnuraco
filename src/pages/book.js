import React from 'react'
import Layout from '../components/layout'
import styles from './book.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
class Book extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
       <br />   <br />   <br />   <br />   <br />
        <h1 className={styles.headera}>Checkout</h1>
        <br />
        <div className="container">
          <div className={styles.checkout}>
            <span className={styles.active}>
              1
            </span>
            <div id={styles.filled} className={styles.progressbar}></div>
            <span className={styles.active}>2</span>
            <div className={styles.progressbar}></div>
            <span className={styles.step}>3</span>
            <div className={styles.progressbar}></div>
            <span className={styles.step}>4</span>
          </div>
          <br /><br/>
          <h2>Book Initial Consultation</h2>
          <br/><br/> 
          <p className={styles.pitem}>Choose a date and time to book your initial consultation appointment:</p>
<br/><br/>
<input type="date" />
<Link to="/time/">
          <button className={styles.secondarycta}>Continue to Checkout</button>
          </Link>
          </div>
        

      </Layout>
    )
  }
}

export default Book