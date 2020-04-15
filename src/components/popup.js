import React from "react";
import styles from "../pages/shop.module.css";
import designImage from '../pages/geometric-decoration.jpg';
class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandImage: false,
    };
    this.expandImage = this.expandImage.bind(this);
    this.collapsePopup = this.collapsePopup.bind(this);
  }
  expandImage(e) {
    e.preventDefault();
    this.setState({
      expandImage: true,
    });
  }
  collapsePopup(e) {
    e.preventDefault();
    this.setState({
      expandImage: false,
    });
  }
  render() {
    const popupopen = {
      color: "black",
      backgroundColor: "white",
      padding: "25px",
      width: "90vw",
      height: "70vh",
      position: "absolute",
      border: "2px solid #d8d8d8",
      borderRadius: "5px",
    };
    const nostyle = {
        display: "none",
      };
      
    return (
      <div className={styles.col}>
        <button
          onClick={(e) => this.expandImage(e)}
          className={styles.imgbox}
        ></button>
        <div
          style={this.state.expandImage == true ? popupopen : nostyle}
          id={styles.popup}
        >
          <button onClick={(e) => this.collapsePopup(e)} className={styles.exit}>
            X
          </button>
          <img
            className={styles.popupimg}
            src={designImage}
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.rowspan}>
              <span className={styles.breadcrumb}></span>
              <span className={styles.breadcrumb}></span>
              <span className={styles.breadcrumb}></span>
              <span className={styles.breadcrumb}></span>
              <span className={styles.breadcrumb}></span>
            </div>
            <p className={styles.productsum}>
            Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, and Mockup.
            </p>
      </div>
    );
  }
}

export default Popup;
