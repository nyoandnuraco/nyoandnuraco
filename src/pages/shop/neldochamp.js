import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import styles from "../shop.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    var b = window.confirm('Would you like to Checkout? Otherwise Press Cancel to Continue Browsing.');
    if(b){
      return window.location.href = "/cart/"
    }else{
      return window.location.href = "/shop/"
    } }
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
        <nav className={styles.subnav}>
          <div className="container">
            <Link
              className={styles.item + " navbar-brand"}
              to="/shop/neldolight"
            >
              Neldo Light
            </Link>
            <Link className={styles.item + " navbar-brand"} to="/shop/neldo">
              Neldo
            </Link>
            <Link
              id={styles.active}
              className={styles.item + " navbar-brand"}
              to="/shop/neldochamp"
            >
              Neldo Champ
            </Link>
          </div>
        </nav>

        <div class="wrapper">
          <h1>Neldo Champ</h1>
          <br />
          <div className={styles.imgbox}></div>
          <div>
            Must have top notch maintainable custom made websites to fit your
            needs
          </div>
          <br /> <br /> <br /> <br />
          <span>
            Price: <i>$4,999</i>
          </span>
          <Link to="#">
          <button id={styles.ctabtn} onClick={(e) => this.handleClick(e)} className="btn text-white btn-lg">
            Add to Cart
          </button></Link>
          <br /> <br />
          <br /> <br />
          <h4 className={styles.detailssubheader}>Details:</h4><br/>
          <p>Complete Custom made Brand Style Guide which includes:</p>
          <ul>
            <li>Mission Statement</li>
            <li>Typography</li>
            <li>Logo Design</li>
            <li>Color Palette</li>
            <li>Iconography</li>
            <li>Hierarchy</li>
            <li>Photography Guidelines</li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Neldochamp;
