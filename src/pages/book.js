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
          <p>Choose a date and time to book your initial consultation appointment:</p>
<br/><br/>

<h3>July</h3>

<ol className="calendar" start="6">

	<li id="lastmonth">
		<ol start="29">
			<li>29</li>
			<li>30</li>
		</ol>
	</li>
	
	<li id="thismonth">
		<ol>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li>12</li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li>19</li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li>26</li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ol>
	</li>
	
	<li id="nextmonth">
		<ol>
			<li>1</li>
			<li>2</li>
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