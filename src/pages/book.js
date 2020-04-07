import React from 'react'
import Layout from '../components/layout'
import styles from './book.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
class Book extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
       <br />   <br />   <br />   <br />   <br />
        <h1 className={styles.headera}>Checkout</h1>
        <br />
        <div className="container">
          <div className={styles.checkout}>
            <span className={styles.active}>
              1
            </span>
            <div id={styles.filled} className={styles.progressbar}></div>
            <span className={styles.active}>2</span>
            <div className={styles.progressbar}></div>
            <span className={styles.step}>3</span>
            <div className={styles.progressbar}></div>
            <span className={styles.step}>4</span>
          </div>
          <br /><br/>
          <h2>Book Initial Consultation</h2>
          <br/><br/><br/><br/>  
          <p className={styles.pitem}>Choose a date and time to book your initial consultation appointment:</p>
<br/><br/>

<h3 className={styles.july}>July</h3>

<ol className={styles.calendar} start="6">

	<li className={styles.oitem} id={styles.lastmonth}>
		<ol className={styles.olist} start="29">
			<li className={styles.oitem}>29</li>
			<li className={styles.oitem}>30</li>
		</ol>
	</li>
	
	<li className={styles.oitem} id={styles.thismonth}>
		<ol className={styles.olist}>
			<li className={styles.oitem}>1</li>
			<li className={styles.oitem}>2</li>
			<li className={styles.oitem}>3</li>
			<li className={styles.oitem}>4</li>
			<li className={styles.oitem}>5</li>
			<li className={styles.oitem}>6</li>
			<li className={styles.oitem}>7</li>
			<li className={styles.oitem}>8</li>
			<li className={styles.oitem}>9</li>
			<li className={styles.oitem}>10</li>
			<li className={styles.oitem}>11</li>
			<li className={styles.oitem}>12</li>
			<li className={styles.oitem}>13</li>
			<li className={styles.oitem}>14</li>
			<li className={styles.oitem}>15</li>
			<li className={styles.oitem}>16</li>
			<li className={styles.oitem}>17</li>
			<li className={styles.oitem}>18</li>
			<li className={styles.oitem}>19</li>
			<li className={styles.oitem}>20</li>
			<li className={styles.oitem}>21</li>
			<li className={styles.oitem}>22</li>
			<li className={styles.oitem}>23</li>
			<li className={styles.oitem}>24</li>
			<li className={styles.oitem}>25</li>
			<li className={styles.oitem}>26</li>
			<li className={styles.oitem}>27</li>
			<li className={styles.oitem}>28</li>
			<li className={styles.oitem}>29</li>
			<li className={styles.oitem}>30</li>
			<li className={styles.oitem}>31</li>
		</ol>
	</li>
	
	<li className={styles.oitem} id={styles.nextmonth}>
		<ol>
			<li className={styles.oitem}>1</li>
			<li className={styles.oitem}>2</li>
		</ol>
	</li>
	
</ol>
<Link to="/time/">
          <button className={styles.secondarycta}>Continue to Checkout</button>
          </Link>
          </div>
        

      </Layout>
    )
  }
}

export default Book