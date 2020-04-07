import React from 'react'
import styles from './ourwork.module.css'
import Layout from '../components/layout'


class Ourwork extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
           <br/>
        <div className={styles.hero}>
          <h1 className={styles.landingheader}>Our Work</h1>
        </div>
      </Layout>
    )
  }
}

export default Ourwork