import React from "react";
import styles from "./time.module.css";
import Layout from "../components/layout";

import { Link } from "gatsby"
class Time extends React.Component {
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
            <div className={styles.progressbar}></div>
            <span className={styles.step}>4</span>
          </div>
          <br /><br/>
          <h2>Available Appointment Slots for April 31st</h2>
          <p>Select a time for your appointment:</p>
          <div className={styles.box}>
            <span className={styles.time}>9:00 AM</span>
          </div>
          <div className={styles.box}>
            <span className={styles.time}>10:00 AM</span>
          </div>
          <div className={styles.box}>
            <span className={styles.time}>12:00 PM</span>
          </div>
          <div className={styles.box}>
            <span className={styles.time}>3:00 PM</span>
          </div>
          <Link to="/addon/">
          <button className={styles.secondarycta}>Pay with Card</button>
          </Link>
          <br/><br/>
        </div>
        <br/><br/>
      </Layout>
    );
  }
}

export default Time;
