import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import styles from "../shop.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "../../components/tab";
import Popup from "../../components/popup";
import DesktopImgGallary from "../../components/desktop-img-gallary";

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

        <Tab />
        <div className="wrapper">
          <h1 className={styles.detailheader}>Neldo Champ</h1>
          <br />
          <div className={styles.mobile}>
            <Popup />
          </div>
          <DesktopImgGallary />
          <span>
            Price: <i>$699</i>
          </span>
          <Link to="/cart/">
            <button
              onClick={(e) => this.handleClick(e)}
              id={styles.ctabtn}
              className="btn text-white btn-lg"
            >
              Add to Cart
            </button>
          </Link>

          <br /> <br />
          <br /> <br />
          <h4 className={styles.detailssubheader}>Details:</h4>
          <br />
          <p>
            Complete Custom made Brand Style Guide, Website Development and CMS
            for maintainability which includes:
          </p>
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
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Neldochamp;
