import React from "react";
import Popup from "./popup";
import designImage from "../pages/geometric-decoration.jpg";
import pencilImage from "../pages/shop/black-pencils-and-design-word.jpg";
import web from "../pages/web.jpg";
import logo from "./nyoandnuralogo.png";
import notebookImage from "../pages/notebook-beside-the-iphone-on-table.jpg";
import styles from "../pages/shop.module.css";

class DesktopImgGallary extends React.Component {
  
  render() {
    return (
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.smimgbox}>
            <img src={pencilImage} />
          </div>
          <div className={styles.smimgbox}>
            <img src={designImage} />
          </div>
          <div className={styles.smimgbox}>
            <img src={web} />
          </div>
          <div className={styles.smimgbox}>
            <img src={notebookImage} />
          </div>
          <div className={styles.smimgbox}>
            <img src={logo} />
          </div>
        </div>
        <Popup />
      </div>
    );
  }
}
export default DesktopImgGallary;
