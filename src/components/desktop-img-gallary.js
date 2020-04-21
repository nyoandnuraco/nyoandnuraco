import React from "react";
import Popup from "./popup";
import designImage from "../pages/geometric-decoration.jpg";
import pencilImage from "../pages/shop/black-pencils-and-design-word.jpg";
import web from "../pages/web.jpg";
import logo from "./nyoandnuralogo.png";
import notebookImage from "../pages/notebook-beside-the-iphone-on-table.jpg";
import styles from "../pages/shop.module.css";

class DesktopImgGallary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      breadcrumb: "5"
    }
    this.selectImage = this.selectImage.bind(this);
  }
  selectImage(e) {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({
      breadcrumb: e.target.value,
    });
  }
  render() {
    const activecrumb = {
      border: "2px solid #0146c9",
      width: "45px",
      height: "auto",
      marginLeft:"2px",
      padding: "0px",
    };
    const inactivecrumb = {
      border: "2px solid #d8d8d8",
      width: "45px",
      height: "45px",
      marginLeft:"2px",
      backgroundColor:"#d8d8d8",
    };
    const dkinfo = {
      width: "100%",
    }
    return (
      <div>
      <div className={styles.row}>
    
        <div className={styles.column}>
        <button
            value="5"
            onClick={(e) => this.selectImage(e)}
            className={styles.smimgbox}
            style={this.state.breadcrumb == "5" ? activecrumb : inactivecrumb}
          >{this.state.breadcrumb == "5" ? <img src={pencilImage} /> : ''}
          </button>
          <button
            value="6"
            onClick={(e) => this.selectImage(e)}
            className={styles.smimgbox}
            style={this.state.breadcrumb == "6" ? activecrumb : inactivecrumb}
          >{this.state.breadcrumb == "6" ? 
               <img src={designImage} />: ''}
          </button>
          <button
            value="7"
            onClick={(e) => this.selectImage(e)}
            className={styles.smimgbox}
            style={this.state.breadcrumb == "7" ? activecrumb : inactivecrumb}
          >{this.state.breadcrumb == "7" ? <img src={web} />: ''}
          </button>
          <button
            value="8"
            onClick={(e) => this.selectImage(e)}
            className={styles.smimgbox}
            style={this.state.breadcrumb == "8" ? activecrumb : inactivecrumb}
          >{this.state.breadcrumb == "8" ? <img src={notebookImage} />: ''}
          </button>
          <button
            value="9"
            onClick={(e) => this.selectImage(e)}
            className={styles.smimgbox}
            style={this.state.breadcrumb === "9" ? activecrumb : inactivecrumb}
          >{this.state.breadcrumb == "9" ? <img src={logo} />: ''}
          </button>
       
        </div>
    
        <img
            className={styles.popupimg}
            src={this.state.breadcrumb === "5"?pencilImage:this.state.breadcrumb==="6"?designImage
:this.state.breadcrumb==="7"?notebookImage:this.state.breadcrumb==="8"?web:this.state.breadcrumb == "9"
                ? logo
                : ""
            }
            width="100%"
            height="100%"
          />
      
      </div>
       <p className={dkinfo}>
       {typeof window !== "undefined"
         ? window.location.href.split("/")[4] === "neldolight"
           ? "Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, and Mockup."
           : window.location.href.split("/")[4] === "neldo"
           ? "Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, Mockup, and complete website development"
           : "Must have top notch maintainable custom made websites to fit your needs. Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, Mockup, complete website development, and CMS added for future maintainability."
         : ""}
     </p></div>
    );
  }
}
export default DesktopImgGallary;
