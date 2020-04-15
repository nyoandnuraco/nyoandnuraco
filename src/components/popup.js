import React from "react";
import styles from "../pages/shop.module.css";
import designImage from '../pages/geometric-decoration.jpg';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandImage: false,
      prodSum: '',
      breadcrumb: "5"
    };
    this.expandImage = this.expandImage.bind(this);
    this.collapsePopup = this.collapsePopup.bind(this);
    this.selectImage = this.selectImage.bind(this)
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
  selectImage(e){
    e.preventDefault();
    this.setState({
      breadcrumb: e.target.value
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
      const activecrumb = {
        backgroundColor: "blue",
      }
      const inactivecrumb = {
        backgroundColor: "#bbb",
      }
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
              <button value="5" onClick={(e) => this.selectImage(e)} className={styles.breadcrumb} style={this.state.breadcrumb == "5" ? activecrumb : inactivecrumb}></button>
              <button value="6" onClick={(e) => this.selectImage(e)} className={styles.breadcrumb} style={this.state.breadcrumb === "6" ? activecrumb : inactivecrumb}></button>
              <button value="7" onClick={(e) => this.selectImage(e)} className={styles.breadcrumb} style={this.state.breadcrumb === "7" ? activecrumb : inactivecrumb}></button>
              <button value="8" onClick={(e) => this.selectImage(e)} className={styles.breadcrumb} style={this.state.breadcrumb === "8" ? activecrumb : inactivecrumb}></button>
              <button value="9" onClick={(e) => this.selectImage(e)} className={styles.breadcrumb} style={this.state.breadcrumb === "9" ? activecrumb : inactivecrumb}></button>
            </div>
            <p className={styles.productsum}>
            {typeof window !== 'undefined' ? 
             window.location.href.split('/')[4] === 'neldolight' ? 
            'Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, and Mockup.' : window.location.href.split('/')[4] === 'neldo' ? "Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, Mockup, and complete website development" : "Must have top notch maintainable custom made websites to fit your needs. Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, Mockup, complete website development, and CMS added for future maintainability.": ''}
            </p>
      </div>
    );
  }
}

export default Popup;
