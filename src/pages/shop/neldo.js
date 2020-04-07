import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import styles from '../shop.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Neldo extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
         <nav className={styles.subnav}>
        <div className="container">
        <Link className={styles.item + " navbar-brand"} to="/shop/neldolight">
            Neldo Light
        </Link> 
        <Link id={styles.active} className={styles.item + " navbar-brand"} to="/shop/neldo">
            Neldo 
        </Link>
        <Link className={styles.item + " navbar-brand"} to="/shop/neldochamp">
            Neldo Champ
        </Link>
        </div>
    </nav>
<div class="wrapper">
     <h1>Neldo</h1>
     <br/> 
               <div className={styles.imgbox}></div>
                <div>Must have top notch maintainable custom made websites to fit your needs</div>
           
                <br/>  <br/>   <br/>  <br/>
                <span>Price: <i>$2,500</i></span> 
   <div id={styles.ctabtn} className="btn text-white btn-lg">Add to Cart</div> 
   <br/>  <br/><br/>  <br/>
    <h4>Details:</h4>
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