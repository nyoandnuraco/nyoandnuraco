import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'


class Neldo extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
         <nav>
        <div className="container">
        <Link className="navbar-brand" to="/shop/neldolight">
            Neldo Light
        </Link> 
        <Link className="navbar-brand" to="/shop/neldo">
            Neldo 
        </Link>
        <Link className="navbar-brand" to="/shop/neldochamp">
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

   <div class="cta-btn">Add to Cart</div> 
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