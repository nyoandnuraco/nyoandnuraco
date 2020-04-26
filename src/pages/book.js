import React from 'react'
import Layout from '../components/layout'
import styles from './book.module.css'
import tstyles from './time.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'

class Book extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showtimes: false,
      dayselected:'15',
      month: 0,
      months: ["April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020", "January 2021", "February 2021", "March 2021"]
    }
    this.showPreviousMonth = this.showPreviousMonth.bind(this);
    this.showNextMonth = this.showNextMonth.bind(this);
    this.showTimes = this.showTimes.bind(this);
  }

  showPreviousMonth(e) {
    e.preventDefault();
    if (this.state.month !== 0) {
      this.setState({
        month: this.state.month - 1,
      });
    }
  }

  showNextMonth(e) {
    e.preventDefault();
    if (this.state.month !== 11) {
      this.setState({
        month: this.state.month + 1,
      });
    }
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
            <button onClick={e => this.showPreviousMonth(e)} className={styles.previousArrow}> - </button>
            <p className={styles.monthSelector}>{this.state.months[this.state.month]}</p>
            <button onClick={e => this.showNextMonth(e)} className={styles.nextArrow}> + </button>
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
          <div id={styles.timecol} className={styles.col}>
              <h4>Available Appointment Slots for April {this.state.dayselected}</h4>
          <p>Select a time for your appointment:</p>
       
            <div className={tstyles.box}>
            <span className={tstyles.time}>9:00 AM</span>
          </div>
          <div className={tstyles.box}>
            <span className={tstyles.time}>10:00 AM</span>
          </div>
          <div className={tstyles.box}>
            <span className={tstyles.time}>12:00 PM</span>
          </div>
          <div className={tstyles.box}>
            <span className={tstyles.time}>3:00 PM</span>
          </div></div>): (<h4>No times available</h4>)}</div>
          <Link to="/addon/">
            <button className={styles.secondarycta}>
              Continue to Checkout
            </button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default Book