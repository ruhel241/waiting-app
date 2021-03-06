// import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
// import $ from 'jquery';
import DateTimePicker from 'react-datetime-picker';

class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      endDateTime: '',
      showTimer: false,
      isEndDateTime: false
    }
  }

  componentDidMount() {
    // this.getCategory();

    this.setState({
      isEndDateTime: !!parseInt(localStorage.getItem('WaitingEndDate')),
      // endDateTime: new Date(localStorage.getItem('WaitingEndDate'))
    })

    if (localStorage.getItem('WaitingEndDate')) {
      this.getData();
    } else {
      document.getElementById("_timer_days").innerHTML = 0
      document.getElementById("_timer_hours").innerHTML = 0 
      document.getElementById("_timer_minutes").innerHTML = 0
      document.getElementById("_timer_seconds").innerHTML = 0
    }
  }
  
  getData() {
    var getCountDownDate = parseInt(localStorage.getItem('WaitingEndDate'));

    this.setState({
      endDateTime: new Date(getCountDownDate)
    })
   
    if (!getCountDownDate) {
      var present_date = new Date();
      getCountDownDate  = present_date.setDate(present_date.getDate() - 1);
    }

    // Run myfunc every second
    const myfunc = setInterval( () => {
        const now      = new Date().getTime();
        const timeleft = getCountDownDate - now;
        // Calculating the days, hours, minutes and seconds left
        const days    = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        // const hours   = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const hours   = Math.floor((timeleft / (1000 * 60 * 60)));
        // const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const minutes = Math.floor((timeleft  / (1000 * 60)));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            
        // Result is output to the specific element
        document.getElementById("_timer_days").innerHTML = days
        document.getElementById("_timer_hours").innerHTML = hours 
        document.getElementById("_timer_minutes").innerHTML = minutes
        document.getElementById("_timer_seconds").innerHTML = seconds 
            
        // Display the message when countdown is over
          if (timeleft < 0) {
            clearInterval(myfunc);
            document.getElementById("_timer_days").innerHTML = 0
            document.getElementById("_timer_hours").innerHTML = 0 
            document.getElementById("_timer_minutes").innerHTML = 0
            document.getElementById("_timer_seconds").innerHTML = 0
            
            document.getElementsByClassName('timer-show')[0].style.display = 'none';
            document.getElementsByClassName('timer-hide')[0].style.display = 'block';
          }
    }, 1000);
  }


  // getCategory = () => {
  //   var category = '"Partner"'; 
  //   $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
  //     if (data.country_name === 'Bangladesh') {
  //        category = '"Partner"'
  //       //  category = '"Wife"'
  //     } else if (data.country_name === 'United States') {
  //       category = '"Husband"'
  //     } 
  //     document.getElementById("category").innerHTML = category;
  //   });
  // };

  showTimerHandler = () => {
    this.setState({
      showTimer: !this.state.showTimer
    })
  }

  render() {
    const {
      endDateTime,
      showTimer,
      isEndDateTime
    } = this.state;

    const changeHandler = (e) => {
      this.setState({
        endDateTime: e,
        isEndDateTime: false
      })
    }

    const submitHandler = () => {
      let EndDate = new Date(this.state.endDateTime).getTime();
      localStorage.setItem('WaitingEndDate', EndDate);
      window.location.reload(true);
    }

    const resetTimer = () => {
        localStorage.removeItem('WaitingEndDate');
        window.location.reload(true);
    }

    return (
      <div className="App">
          <h1 className="apps-name">
            Waiting App 
            <button className="show-timer" onClick={this.showTimerHandler}> click </button>
          </h1>
          
          {
            showTimer && (
              <div className="end-date-time-box">
                <div className="date-time">
                  <label> End Time {this.state.isEndDateTime} </label>
                  <DateTimePicker onChange={changeHandler} value={endDateTime} />
                </div>
                
                <div className="date-time-btn">
                  { !isEndDateTime ? 
                      <button className="submit-button" onClick={submitHandler} disabled={!this.state.endDateTime}>&#10003;</button>
                    : <button className="reset-button" onClick={resetTimer}>X</button>
                  }
                </div>
                 
              </div>
            )
          }
          
          <div className="_sale_booster_countdown_wrap _sale-booster-countdown-bottom">
            <div className="timer-show"> 
              <p className="_sale-booster-hits">
                You are waiting to meet your <span id="category">"Partner"</span> and the time is left
              </p>
                
              <div className="_sale-booster-countdown">
                <div className="waiting_days_count">
                  <div className="_sale-discount-countdown-time"> 
                    <span className="_sale-discount-time _timer_days ddd" id="_timer_days"></span>  
                    <span className="_sale-discount-units sss">days</span>
                  </div>
                </div>
                <div className="waiting-countdown">
                  <div className="_sale-discount-countdown-timer">  
                    <span className="_sale-discount-time _timer_hours" id="_timer_hours"></span>  
                    <span className="_sale-discount-units">hours</span>
                  </div>
                  <div className="_sale-discount-countdown-timer">
                  <span className="_sale-discount-time _timer_minutes" id="_timer_minutes"></span>  
                    <span className="_sale-discount-units">minutes</span>
                  </div>

                  <div className="_sale-discount-countdown-timer">   
                    <span className="_sale-discount-time _timer_seconds" id="_timer_seconds"></span>  
                    <span className="_sale-discount-units">seconds</span>
                  </div>
                </div>
              </div>

              <p className="_sale-booster-hits">
                When the day and timer hits zero, your heartbeat will go so fast.....
              </p>

              <div className="image"> 
                <img src="/images/4.jpg" alt="sddsd"/>
              </div>  
            </div>

            <div className="timer-hide" style={{display: "none"}}>
              <p className="_sale-booster-hits">
                Congratulations
              </p>
              <div className="image"> 
                <img src="/images/5.jpg" alt="sddsd"/>
              </div> 
              <div className="image"> 
                <img src="/images/1.jpg" alt="sddsd"/>
              </div> 
            </div>
          </div>
      </div>
    )
  }
    
  
}
export default App;
