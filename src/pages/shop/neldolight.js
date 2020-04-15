import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import styles from "../shop.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import designImage from '../../pages/geometric-decoration.jpg';
import Tab from '../../components/tab'
class Neldolight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countl: 0,
      expandImage: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.expandImage = this.expandImage.bind(this);
    this.collapsePopup = this.collapsePopup.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      countl: this.state.countl + 1,
    });
    var element = document.getElementById("cartcount");
    element.classList.add("mystyle");
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
    const popupopen = {
      color: "black",
      backgroundColor: "white",
      padding: "25px",
      width: "90vw",
      height: "70vh",
      position: "absolute",
      border: "2px solid #d8d8d8",
      borderRadius:"5px",
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
        
       
        <div class="wrapper">
          <h1>Neldo Light</h1>
          <br />
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.smimgbox}></div>
              <div className={styles.smimgbox}></div>
              <div className={styles.smimgbox}></div>
              <div className={styles.smimgbox}></div>
              <div className={styles.smimgbox}></div>
            </div>
            <div onClick={(e) => this.expandImage(e)} className={styles.imgbox}></div>
            <div style={this.state.expandImage == true ? popupopen : nostyle} id={styles.popup}>

              <span onClick={(e) => this.collapsePopup(e)} className={styles.exit}>X</span>
              <img className={styles.popupimg} src={designImage} width="100%" height="100%" />
            </div>
            <div>
              Must have top notch maintainable custom made websites to fit your
              needs
            </div>
          </div>
       
          <span>
            Price: <i>$699</i>
          </span>
          <Link to="/cart/">
          <button onClick={(e) => this.handleClick(e)} id={styles.ctabtn} className="btn text-white btn-lg">
            Add to Cart
          </button>
          </Link>
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

export default Neldolight;
