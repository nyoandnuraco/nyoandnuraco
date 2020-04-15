import React from 'react'
import { Link } from 'gatsby'
import styles from '../pages/shop.module.css'

export default (props) => (
    <div class="wrapper">
  
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.smimgbox}></div>
        <div className={styles.smimgbox}></div>
        <div className={styles.smimgbox}></div>
        <div className={styles.smimgbox}></div>
        <div className={styles.smimgbox}></div>
      </div>

      <div className={styles.imgbox}></div>
 
      <div>{props.productsummary}
      
      </div>

    </div>
 Price: <i>{props.productprice}</i>
   <br />  <br />  <br />  <br />
    <h4 id={styles.detailssubheader}>Details:</h4>
    <br />
<p>{props.productdetails}</p>

  </div>
)
