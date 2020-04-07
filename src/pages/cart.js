import React from "react";
import styles from "./cart.module.css";
import Layout from "../components/layout";
import logo from "../components/nyoandnuralogo.png";
import { Link } from "gatsby"
class Cart extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <br />
        <h1 className={styles.header}>Checkout</h1>
        <br />
        <div className="container">
          <div className={styles.checkout}>
            <span id={styles.active} className={styles.step}>
              1
            </span>
            <div className={styles.progressbar}></div>
            <span className={styles.step}>2</span>
            <div className={styles.progressbar}></div>
            <span className={styles.step}>3</span>
            <div className={styles.progressbar}></div>
            <span className={styles.step}>4</span>
          </div>
          <br /><br/>
          <div className={styles.sidebyside}>
          <h2 className={styles.headercart}>Your Cart</h2>
          <h4 className={styles.itemnumber}>1 Item</h4>
          </div>
          <hr />
          <h6 className={styles.cartitemdesc}>
            Neldo Package: Lorem ipsum ipsum ipsum
          </h6>
          <img className={styles.cartitemimg} src={logo} />
          <br /><br/>    <p className={styles.cartitemqty}>
            <span><strong>Quantity: </strong></span>
            <select className={styles.cartitemselect}>
              <option> 1</option>
            </select>
          </p>          <br /><br/>
          <p className={styles.pricelabel}>
            <span>
              <strong>Price: </strong>
            </span>
            <span>
              <i>$2999.00</i>
            </span>
          </p>
          <br /> <br /> <br />
          <button className={styles.removecta}>Remove Item</button>
          <br /> <br /> 
          <hr />
          <p>
            Total:
            <span>
              <i>$2999.00</i>
            </span>
          </p>
<Link to="/book/">
          <button className={styles.secondarycta}>Continue to Checkout</button>
          </Link>
          <br />
        </div>
        <br /> <br />
      </Layout>
    );
  }
}

export default Cart;
