import React from 'react'
import { Link } from 'gatsby'
import styles from './shop.module.css'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';

class Shop extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
            <br/>
          <div className={styles.hero}><h1 className={styles.landingheader}>Shop</h1></div>
        <div className="container pl-container">
      
       <div>
       <Link to="/shop/neldolight">
         <h3>Neldo Light</h3>
         <p>dsfasdfafdasfsadfasfdas</p>
         <span>$2500</span>
       </Link>
       </div>
       <hr/>
       <div className="">
       <Link to="/shop/neldo">
          <h3>Neldo</h3>
          <p>dsfasdfafdasfsadfasfdas</p>
          <span>$2500</span>
      </Link>
       </div>
       <hr/>
       <div className="">
       <Link to="/shop/neldochamp">
          <h3>Neldo Champ</h3>
          <p>dsfasdfafdasfsadfasfdas</p>
          <span>$2500</span>
       </Link>
       </div>
       <hr/>
       </div>
      </Layout>
    )
  }
}

export default Shop

