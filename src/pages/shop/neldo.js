import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import styles from '../shop.module.css'

class Neldo extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
         <nav className={styles.subnav}>
        <div className="container">
        <Link id={styles.sublink} className="navbar-brand" to="/shop/neldolight">
            Neldo Light
        </Link> 
        <Link id={styles.active} className="navbar-brand" to="/shop/neldo">
            Neldo 
        </Link>
        <Link id={styles.sublinklast} className="navbar-brand" to="/shop/neldochamp">
            Neldo Champ
        </Link>
        </div>
    </nav>
<div class="wrapper">
     <h2>Neldo</h2>

               <div class="img-box"></div>
                <div class="description">Must have top notch maintainable custom made websites to fit your needs</div>
             <span>$2,500</span> 
                <br/>  <br/>

   <div id={styles.ctabtn} className="btn text-white btn-lg">Add to Cart</div> 
    <h3>Details</h3>
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
    )
  }
}

export default Neldo