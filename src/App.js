// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Waiting Apps</h1>
        <div className="_sale_booster_countdown_wrap _sale-booster-countdown-bottom">
          <p className="_sale-booster-hits"> Meet Your Husband left </p>
            
            {/* <div className="timer_days_count">
              <div className="_sale-discount-countdown-timer"> 
                <span className="_sale-discount-time _timer_days">121</span>  
                <span className="_sale-discount-units">days</span>
              </div>
            </div> */}

            <div className="_sale-booster-countdown">
              
              <div className="waiting_days_count">
                <div className="_sale-discount-countdown-time"> 
                  <span className="_sale-discount-time _timer_days ddd">120</span>  
                  <span className="_sale-discount-units sss">days</span>
                </div>
              </div>

              <div className="waiting-countdown">
                <div className="_sale-discount-countdown-timer">  
                  <span className="_sale-discount-time _timer_hours">01</span>  
                  <span className="_sale-discount-units">hours</span>
                </div>

                <div className="_sale-discount-countdown-timer">
                <span className="_sale-discount-time _timer_minutes">36</span>  
                  <span className="_sale-discount-units">minutes</span>
                </div>

                <div className="_sale-discount-countdown-timer">   
                  <span className="_sale-discount-time _timer_seconds">00</span>  
                  <span className="_sale-discount-units">seconds</span>
                </div>
              </div>

            </div>
          <p className="_sale-booster-hits"> when the day and timer hits zero, your heatbeat so fast..... </p>
        </div>
    </div>
  );
}

export default App;
