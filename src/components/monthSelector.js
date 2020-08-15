import React from 'react';
import styles from '../pages/book';
import { Page } from 'react-onsenui';
var ons = require('onsenui');
var Ons = require('react-onsenui');

class MonthSelector extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      day: '15'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e) {
    e.preventDefault();
    this.setState({
      day: '15'
    })
    console.log(e.target.value);
  }
    render(){
      
  return (
    <Ons.Page>
  <form>
        <div className="row">
          <div id={styles.daycol} className={styles.col}>
            <div value={styles.date} onClick={(e)=> this.handleClick(e)} className={styles.day}>
             {/* <button value={this.state.day} onClick={e=>this.handleClick(e)} className="column">
                <h6 className={styles.dayOfWeek}>Wednesday</h6>
                <h2 className={styles.date}>{this.state.day}</h2>
  </button>*/}
         
              <hr className={styles.divider}></hr>
              <div className="column">
                <p className={styles.description}>Initial Appt</p>
                <p className={styles.duration}>60 mins</p>
           
              </div>
            </div>
            </div>
           
      </div>
  </form>
  </Ons.Page>
  );
    }
}

export default MonthSelector;