import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import styles from "../shop.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from '../../components/tab';

class Neldo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
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
        <span style={this.state.count !== 0 ? mystyle : nostyle}>
          {this.state.count}
        </span>
       <Tab/>
        <div class="wrapper">
          <h1>Neldo</h1>
          <br />
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.smimgbox}></div>
              <div className={styles.smimgbox}></div>
              <div className={styles.smimgbox}></div>
              <div className={styles.smimgbox}></div>
              <div className={styles.smimgbox}></div>
            </div>
            <div className={styles.imgbox}></div>
            <div>
              Must have top notch maintainable custom made websites to fit your
              needs
            </div>
          </div>
          <span>
            Price: <i>$2,999</i>
          </span>
          <Link to="#">
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
          <h4 id={styles.detailssubheader}>Details:</h4>
          <br />
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

export default Neldo;
