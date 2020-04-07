import React from 'react'
import { Link } from 'gatsby'
import './shop.css'
import Layout from '../components/layout'


class Shop extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
        <div className="container">
       <div>
       <Link to="/shop/neldolight">
         <h3>Neldo Light</h3>
         <p>dsfasdfafdasfsadfasfdas</p>
         <span>$2500</span>
       </Link>
       </div>
       <hr/>
       <div className="">
       <Link to="/shop/neldolight">
          <h3>Neldo</h3>
          <p>dsfasdfafdasfsadfasfdas</p>
          <span>$2500</span>
      </Link>
       </div>
       <hr/>
       <div className="">
       <Link to="/shop/neldolight">
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

