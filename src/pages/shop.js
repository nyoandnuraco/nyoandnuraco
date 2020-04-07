import React from 'react'
import './shop.css'
import Layout from '../components/layout'


class Shop extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
        <div className="container">
       <div className="">
         <a href="#">
         <h3>Neldo Light</h3>
         <p>dsfasdfafdasfsadfasfdas</p>
         <span>$2500</span>
         </a>
       </div>
       <hr/>
       <div className="">
         <a href="#">
          <h3>Neldo</h3>
          <p>dsfasdfafdasfsadfasfdas</p>
          <span>$2500</span>
          </a>
       </div>
       <hr/>
       <div className="">
         <a href="#">
          <h3>Neldo Champ</h3>
          <p>dsfasdfafdasfsadfasfdas</p>
          <span>$2500</span>
          </a>
       </div>
       <hr/>
       </div>
      </Layout>
    )
  }
}

export default Shop

