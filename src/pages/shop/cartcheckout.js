import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import styles from "../shop.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "../../components/tab";
import DesktopImgGallary from "../../components/desktop-img-gallary";
import Popup from "../../components/popup";
import Neldos from './neldos'
import SlideNav from '../../components/SlideNav'
import ProductDetails from "../../components/ProductDetails";
class CartCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let i ='neldo';
    localStorage.setItem('item','neldo');
  
    this.setState({
      count: this.state.count + 1,
    });
   var element = document.getElementById("shows");
    element.classList.add("nostyle");
  }
  render() {
    const mystyles = {
      color: "white",
      backgroundColor: "red",
      padding: "10px",
      paddingLeft: "12px",
      borderRadius: "50%",
      fontSize: "8px",
      marginBottom: "150px",
      position: "absolute",
      paddingRight: "12px",
      marginTop: "-82px",
      marginLeft: "82vw",
    };
    const mystyle = {
      display:"block",
    }
    const nostyle = {
      display: "none",
    };
    return (

      <Layout location={this.props.location}>
        <span style={this.state.count !== 0 ? mystyle : nostyle}>
   
          <SlideNav />
        </span>  
      </Layout>

    );
  }
}

export default CartCheckout;
