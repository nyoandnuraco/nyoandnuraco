import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import styles from "../shop.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from '../../components/tab';
import ProductDetail from '../../components/product-detail'
import Popup from '../../components/popup'
class Neldochamp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countc: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      countc: this.state.countc + 1,
    });
    var element = document.getElementById("cartcount");
    element.classList.add("mystyle"); 
   }
  render() {
    const mystyle = {
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
    const nostyle = {
      display: "none",
    };
    return (
      <Layout location={this.props.location}>
        <span style={this.state.countc !== 0 ? mystyle : nostyle}>
          {this.state.countc}
        </span>

       <Tab/>
       <div class="wrapper">
         <h1>Neldo Champ</h1><br/>
         <Popup/>
       <ProductDetail productname="Neldo Champ" productprice=" $4,999" productsummary="
        Must have top notch maintainable custom made websites to fit your
        needs. Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, Mockup, complete website development, and CMS added for future maintainability." productdetails="Complete Custom made Brand Style Guide, Website Development and CMS for maintainability which includes:">
        
    </ProductDetail>
    <Link to="#">
      <button
        onClick={(e) => this.handleClick(e)}
        id={styles.ctabtn}
        className="btn text-white btn-lg"
      >
        Add to Cart
      </button>
    </Link>
    <ul>
      <li>Mission Statement</li>
      <li>Typography</li>
      <li>Logo Design</li>
      <li>Color Palette</li>
      <li>Iconography</li>
      <li>Hierarchy</li>
      <li>Photography Guidelines</li>
      <li>Full Website Development</li>
      <li>CMS for maintainability</li>
    </ul>  </div>
          </Layout>
    );
  }
}

export default Neldochamp;
