import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import styles from "../components/slidenav.module.css";
import logo from './nyoandnuralogo.png'
const ProductDetails = ({ product }) => {
    const { removeProduct } = useContext(ProductContext);
    return (
        <li className={styles.cartitem}>
            <div className={styles.cc}>
                <h6 className={styles.cartitemdesc}>{product.package}</h6>
                <img alt="logo" className={styles.cartitemimg} src={logo} />
            </div>
            <div className={styles.cc}>
            <p className={styles.cartitemqty}>
                <span>
                    <strong>Quantity: </strong>
                </span>
                <select className={styles.cartitemselect}>
                    <option> 1</option>
                </select>
            </p>
            <p className={styles.pricelabel}>
           
                <span>
                    <i> <div className="price">
                        <strong>Price: </strong>${product.price}</div></i>
                </span>
            </p>
            </div>
  
            <button onClick={() => removeProduct(product.id)} className={styles.removecta}>
                Remove Item
          </button>  <hr className={styles.hr}/>
      
        
        </li>
    );
}

export default ProductDetails;