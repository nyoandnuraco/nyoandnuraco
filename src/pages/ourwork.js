import React from 'react'
import styles from './ourwork.module.css'
import Layout from '../components/layout'


class Ourwork extends React.Component {
  render() {
  
    return (
      <Layout location={this.props.location}>
         <div className={styles.hero}>Our Work</div>
      </Layout>
    )
  }
}

export default Ourwork