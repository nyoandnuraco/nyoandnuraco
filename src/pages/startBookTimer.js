import React from 'react';
import styles from './book.module.css'
import tstyles from './time.module.css'

class StartBookTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            idOfButtonToEnable:"",
            selectedTime: false,
            idOfButtonToDisable:"",
            disableButton:false
        }
    }
    startBookTimer(e){
        e.preventDefault()
        setTimeout(function(){ 
            enableButton();   
        }, 9000/*00*/);
        this.setState({
            disableButton: true
        });
      const enableButton = () => {
            this.setState({
                idOfButtonToEnable: this.state.idOfButtonToDisable,
                selectedTime: false
            });
        }
    }
    changeButtonColor(e){
        e.preventDefault();
        console.log(e.target.id);
        this.setState({
            selectedTime: true,
            idOfButtonToDisable: e.target.id
          });
    }
    render() {
        return(
            <div>
               <div id={styles.timecol} className={styles.col}>
            <br/>
            <div onClick={(e)=>this.changeButtonColor(e)} style={{'backgroundColor':this.state.selectedTime ? "green" : "white",'display':this.state.idOfButtonToEnable === "5" ? "block": this.state.idOfButtonToDisable === "5" & this.state.disableButton ? "none":"block"}} className={tstyles.box}>
                <span style={{'display':this.state.idOfButtonToEnable === "5" ? "block": this.state.idOfButtonToDisable === "5" & this.state.disableButton ? "none":"block"}} className={tstyles.time} id="5">9:00 AM</span></div>

                <div className={tstyles.box}>
            <span className={tstyles.time}>10:00 AM</span>
          </div>
          <div className={tstyles.box}>
            <span className={tstyles.time}>12:00 PM</span>
          </div>
          <div className={tstyles.box}>
            <span className={tstyles.time}>3:00 PM</span>
          </div>
</div>
                <button onClick={(e)=>this.startBookTimer(e)} className={styles.secondarycta}>CONTINUE TO CHECKOUT</button>
            </div>
        )
    }
}
export default StartBookTimer;