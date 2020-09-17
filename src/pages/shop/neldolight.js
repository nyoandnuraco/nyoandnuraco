import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import styles from "../shop.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "../../components/tab";
import Neldos from './neldos';
import ProductGallary from '../productGallary';
class Neldolight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countl: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      countl: this.state.countl + 1,
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
        <span style={this.state.countl !== 0 ? mystyle : nostyle}>
          {this.state.countl}
        </span>
        <Tab />
        <ProductGallary colorPickerOptions={['#5d77f5', '#0fd085', '#ffba5b', '#f95e62', 'lightpink']} initialSelectedColor={'black'} />
        <div className="wrapper">
        <h1 className={styles.detailheader}>Neldo Light</h1>
          <br />
       
          <span>
            Price: <i>$699</i>
          </span>
          <Neldos/>
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

export default Neldolight;
