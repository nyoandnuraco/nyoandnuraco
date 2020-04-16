import React from 'react'
import Layout from '../components/layout'
import styles from './book.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'

class Book extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      month: 0,
      months:["April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020", "January 2021", "February 2021", "March 2021"]
    }
    this.showPreviousMonth = this.showPreviousMonth.bind(this);
    this.showNextMonth = this.showNextMonth.bind(this);
  }
  showPreviousMonth(e){
    e.preventDefault();
    if(this.state.month !== 0){
    this.setState({
      month: this.state.month - 1,
    });
  }
  }
  showNextMonth(e){
    e.preventDefault();
    if(this.state.month !== 11){
    this.setState({
      month: this.state.month + 1,
    });
  }
  }
  render() {

    return (
      <Layout location={this.props.location}>
       <br />   <br />   
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
          <br/><br/> 
          <p className={styles.pitem}>Choose a date and time to book your initial consultation appointment:</p>
<br/><br/>
<div className={styles.wrapper}>
  <button onClick={e => this.showPreviousMonth(e)} className={styles.previousArrow}>
   -
  </button>
    <p className={styles.monthSelector}>{this.state.months[this.state.month]}</p>
<button onClick={e => this.showNextMonth(e)} className={styles.nextArrow}> + </button>
</div>
<div className={styles.col}>
  <div className={styles.day}>
    <div className="column">
    <h6 className={styles.dayOfWeek}>Wednesday</h6>
    <h2 className={styles.date}>15</h2>
    </div>
    <hr className={styles.divider}></hr>
    <div className="column">
    <p className={styles.description}>Initial Appt</p>
    <p className={styles.duration}>60 mins</p>
    </div>
  </div>
  <div className={styles.day}>
    <div className="column">
    <h6 className={styles.dayOfWeek}>Thursday</h6>
    <h2 className={styles.date}>16</h2>
    </div>
    <hr className={styles.divider}></hr>
    <div className="column">
    <p className={styles.description}>Initial Appt</p>
    <p className={styles.duration}>60 mins</p>
    </div>
  </div>
  <div className={styles.day}>
    <div className="column">
    <h6 className={styles.dayOfWeek}>Friday</h6>
    <h2 className={styles.date}>17</h2>
    </div>
    <hr className={styles.divider}></hr>
    <div className="column">
    <p className={styles.description}>Initial Appt</p>
    <p className={styles.duration}>60 mins</p>
    </div>
  </div>
  <div className={styles.day}>
    <div className="column">
    <h6 className={styles.dayOfWeek}>Monday</h6>
    <h2 className={styles.date}>20</h2>
    </div>
    <hr className={styles.divider}></hr>
    <div className="column">
    <p className={styles.description}>Initial Appt</p>
    <p className={styles.duration}>60 mins</p>
    </div>
  </div>
  <div className={styles.day}>
    <div className="column">
    <h6 className={styles.dayOfWeek}>Tuesday</h6>
    <h2 className={styles.date}>21</h2>
    </div>
    <hr className={styles.divider}></hr>
    <div className="column">
    <p className={styles.description}>Initial Appt</p>
    <p className={styles.duration}>60 mins</p>
    </div>
  </div>

</div>
<Link to="/time/">
          <button className={styles.secondarycta}>Continue to Checkout</button>
          </Link>
          </div>
        

      </Layout>
    )
  }
}

export default Book