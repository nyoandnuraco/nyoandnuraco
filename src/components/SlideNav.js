import React, { useContext } from "react";
import styles from "./slidenav.module.css";
import { ProductContext } from "../contexts/ProductContext";
import ProductDetails from "../components/ProductDetails";
import { Link } from 'gatsby';
const SlideNav = () => {
  const { products } = useContext(ProductContext);
  const cartlist = {
    height: "100%",
    width: "33vw",
    position: "absolute",
    color: "red",
  };
  var p = 0;
  var myfunc = function(){ 
    for(var i = 0; i < products.length; i++){ 
      if(products[i].price === null || products[i].price === undefined){
        products[i].price = 0;
      }
      else if (i === products.length){
        return p;
        }
      else{
        p += products[i].price; 
        }
      };
    }
  return typeof window !== 'undefined' ? (products.length ? (
    <div id={styles.show} className="container">
      <h1 className={styles.header}>Checkout</h1>
      <div className={styles.checkout}>
        <span id={styles.active} className={styles.step}>
          1
        </span>
        <div className={styles.progressbar}></div>
        <span className={styles.step}>2</span>
     
  
      </div>
      <div className={styles.sidebyside}>
        <h2 className={styles.headercart}>Your Cart</h2>
        <h4 className={styles.itemnumber}> {typeof window !== 'undefined' ? (products.length):("")} Items</h4>
      </div>
      <hr />
      <ul className={styles.cartlist}>
        {products.map((product) => {
          return <ProductDetails product={product} key={product.id} />;
        })}
      </ul>
      <p className={styles.total}>
        Total:
        <span>
          <i>${myfunc(), p}</i>
        </span>
      </p>
      <Link to="/addon/">
      <button className={styles.secondarycta}>Continue to Checkout</button>
      </Link>
    </div>
  ) : (
    <div styles={{ cartlist }}>There are No items in your cart...</div>
  )):("");
};
export default SlideNav;
