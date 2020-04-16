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
      imageSelected: "5"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div className={styles.row}>
        <div className={styles.column}>
          <button onClick={(e) => this.handleClick(e)} className={styles.smimgbox}>
            <img src={pencilImage} />
          </button>
          <button className={styles.smimgbox}>
            <img src={designImage} />
          </button>
          <button className={styles.smimgbox}>
            <img src={web} />
          </button>
          <button className={styles.smimgbox}>
            <img src={notebookImage} />
          </button>
          <button className={styles.smimgbox}>
            <img src={logo} />
          </button>
        </div>
        <Popup />
      </div>
    );
  }
}
export default DesktopImgGallary;
