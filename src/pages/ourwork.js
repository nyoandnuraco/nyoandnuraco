import React from 'react'
import styles from './ourwork.module.css'
import Layout from '../components/layout'
import { Link } from 'gatsby'

class Ourwork extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
           <br/>
           <div className="container">
        <div className={styles.hero}>
          <h1 className={styles.landingheader}>Our Work</h1>
          
        </div>
      
        <ul>
            <Link to="/ourwork/">
            <li className={styles.clientitem}>
             Customer 1
            </li>
            </Link>
            <Link to="/ourwork/">
            <li className={styles.clientitem}>
            Customer 2
            </li>
            </Link>
            <Link to="/ourwork/">
            <li className={styles.clientitem}>
            Customer 3
            </li>
            </Link>
            <Link to="/ourwork/">
            <li className={styles.clientitem}>
            Customer 4
            </li>
            </Link>
          </ul>
          </div>
      </Layout>
    )
  }
}

export default Ourwork