import React from "react";
import styles from "./addon.module.css";
import Layout from "../components/layout";
import { Link } from "gatsby"

class Addon extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <br />
        <h1 className={styles.headera}>Checkout</h1>
        <br />
        <div className="container">
          <div className={styles.checkout}>
            <span className={styles.active}>
              1
            </span>
            <div className={styles.filled}></div>
            <span className={styles.active}>2</span>
            <div className={styles.filled}></div>
            <span className={styles.active}>3</span>
            <div className={styles.filled}></div>
            <span className={styles.active}>4</span>
          </div>
          <br /><br/>
          <h2 className={styles.secondheader}>...You might enjoy letting us take over the burden of updates and maintenance. </h2>
          <h1 className={styles.mainheader}>Maintenance Upgrade Services</h1>
          <br />
          <div className={styles.imgbox}></div>
          <div>We handle maintenance and updates needed in the future.</div>

          <br />  <br />   <br />  <br />
          <span>Price: <i>$2,999</i></span>
          <div id={styles.ctabtn} className="btn text-white btn-lg">Add to Cart</div>
          <br />  <br /><br />  <br />
          <br/><br/>

        </div>
        <br/><br/>
        <Link to="/addon/">
          <button className={styles.secondarycta}>Pay with Card</button>
          </Link>
      </Layout>
    );
  }
}

export default Addon;
