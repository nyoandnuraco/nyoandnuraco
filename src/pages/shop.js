import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styles from './shop.module.css'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import web from './web.jpg'
import AddToCart from '../components/AddToCart'


class Shop extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <br />
        <div className={styles.hero}>
          <h1 className={styles.landingheader}>Shop</h1>
        </div>
        <div className={styles.plcontainer}>
      
          <div className={styles.rowborder}>
          <Link className={styles.plitem} to="/shop/neldolight">
          <img className={styles.productimg} width="100%" height="100%" src={web}/>
            <h3 className={styles.subheading}>Neldo Light</h3>
            <p className={styles.productitemdesc}>dsfasdfafdasfsadfasfdas</p>
            <span className={styles.productitemprice}>$699</span>
           <AddToCart />
          </Link>
          </div>
          <div className={styles.rowborder}>
          <Link className={styles.plitem} to="/shop/neldo">
          <img className={styles.productimg} width="100%" height="100%" src={web}/>
            <h3 className={styles.subheading}>Neldo</h3>
            <p className={styles.productitemdesc}>dsfasdfafdasfsadfasfdas</p>
            <span className={styles.productitemprice}>$2999</span>
          </Link>
       </div>
       <div className={styles.rowborder}>
          <Link className={styles.plitem} to="/shop/neldochamp">
          <img className={styles.productimg} width="100%" height="100%" src={web}/>
            <h3 className={styles.subheading}>Neldo Champ</h3>
            <p className={styles.productitemdesc}>dsfasdfafdasfsadfasfdas</p>
            <span className={styles.productitemprice}>$4999</span>
          </Link>
       </div>
        </div>
      </Layout>
    )
  }
};

export default Shop

