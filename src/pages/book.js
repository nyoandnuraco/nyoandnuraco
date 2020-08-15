import React from 'react'
import Layout from '../components/layout'
import styles from './book.module.css'
import tstyles from './time.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
import MonthSelector from '../components/monthSelector'
import StartBookTimer from './startBookTimer.js'
class Book extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showtimes: false,
      dayselected:'15',
      month: 0,
      months: ["April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020", "January 2021", "February 2021", "March 2021"]
    }
    this.getPreviousMonth = this.getPreviousMonth.bind(this);
    this.getNextMonth = this.getNextMonth.bind(this);
    this.showTimes = this.showTimes.bind(this);
  }

  getAvailableTimes = async (e) => {
    e.preventDefault();
    //const month = e.target.elements.month.value;
   // const api_call = await fetch(``)
  }

  getPreviousMonth(e) {
    e.preventDefault();
    if (this.state.month !== 0) {
      this.setState({
        month: this.state.month - 1,
      });
    }
  }

  getNextMonth = async (e) => {
    e.preventDefault();
    if (this.state.month !== 11) {
      this.setState({
        month: this.state.month + 1,
      });
    }
    console.log(e.target.value);
  }

  showTimes(e){
    e.preventDefault()
      this.setState({
        showtimes: true,
        dayselected:'16'
      });
  }
 
  render() {

    return (
      <Layout location={this.props.location}>
        <br /><br />
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
          </div>
          <br /><br />
          <h2>Book Initial Consultation</h2>
          <br /><br />
          <p className={styles.pitem}>Choose a date and time to book your initial consultation appointment:</p>
          <br /><br />

<div className={styles.wrapper}>
  {this.state.month === 0 ? 
          <button disabled="true" className={styles.disabled} onClick={e => this.getPreviousMonth(e)}>  -  </button> :
          <button className={styles.nextarrow} onClick={e => this.getPreviousMonth(e)}>  -  </button>}

<div className={styles.monthSelector}>
         <MonthSelector /><span className={styles.monthSelector}>{this.state.months[this.state.month]}</span>
         </div>
         {this.state.month === 11 ? 
          <button disabled="true" className={styles.disabled} onClick={e => this.getPreviousMonth(e)}>  +  </button> :
         <button value={this.state.month} className={styles.nextarrow} onClick={e => this.getNextMonth(e)}> + </button>}
         </div>
          <div className="row">
          <div id={styles.daycol} className={styles.col}>
    
            <div value={styles.date} onClick={(e)=> this.showTimes(e)} className={styles.day}>
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
            <div value={styles.date} onClick={(e)=> this.showTimes(e)} className={styles.day}>
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
            <div value={styles.date} onClick={(e)=> this.showTimes(e)} className={styles.day}>
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
            <div value={styles.date} onClick={(e)=> this.showTimes(e)} className={styles.day}>
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
            <div value={styles.date} onClick={(e)=> this.showTimes(e)} className={styles.day}>
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
          {this.state.showtimes ? ( 
       
            <StartBookTimer />
        ): (<h4>No times available</h4>)}</div>
        {/**</Layout> <Link to="/addon/">
            <button className={styles.secondarycta}>
              Continue to Checkout
            </button>
          </Link>**/}
        </div>
      </Layout>
    )
  }
}

export default Book