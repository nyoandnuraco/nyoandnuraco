import React from "react";
import styles from "./cart.module.css";
import Layout from "../components/layout";
import logo from "../components/nyoandnuralogo.png";
import { Link } from "gatsby";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeItem: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
      e.preventDefault();
    this.setState({
      removeItem: true
    });
  }
  render() {
    const remove = {
      display:'none'
    }
    const keep ={
      display: 'block'
    }
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
          <br />
          <br />
          <div className={styles.sidebyside}>
            <h2 className={styles.headercart}>Your Cart</h2>
            <h4 className={styles.itemnumber}>1 Item</h4>
          </div>
          <hr />
          <h6 style={this.state.removeItem ? remove : keep} className={styles.cartitemdesc}>
            Neldo Package: Lorem ipsum ipsum ipsum
          </h6>
          <img style={this.state.removeItem ? remove : keep} alt="logo" className={styles.cartitemimg} src={logo} />
          <br />
          <br />
          <p style={this.state.removeItem ? remove : keep} className={styles.cartitemqty}>
            <span>
              <strong>Quantity: </strong>
            </span>
            <select className={styles.cartitemselect}>
              <option> 1</option>
            </select>
          </p>
          <br />
          <br />
          <p style={this.state.removeItem ? remove : keep} className={styles.pricelabel}>
            <span>
              <strong>Price: </strong>
            </span>
            <span>
              <i>$2999.00</i>
            </span>
          </p>
          <br /> <br /> <br />
          <button style={this.state.removeItem ? remove : keep} onClick={e => this.handleClick(e)} className={styles.removecta}>
            Remove Item
          </button>
          <br /> <br />
          <hr />
          <p>
            Total:
            <span>
              <i>$2999.00</i>
            </span>
          </p>
          <Link to="/book/">
            <button className={styles.secondarycta}>
              Continue to Checkout
            </button>
          </Link>
          <br />
        </div>
        <br /> <br />
      </Layout>
    );
  }
}

export default Cart;
