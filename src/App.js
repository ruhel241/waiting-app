// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {

  // The data/time we want to countdown to
  const countDownDate = new Date("Nov 10, 2021 10:00:00").getTime();

  // Run myfunc every second
  const myfunc = setInterval( () => {
      
      const now      = new Date().getTime();
      const timeleft = countDownDate - now;
          
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
          document.getElementById("_timer_days").innerHTML = ""
          document.getElementById("_timer_hours").innerHTML = "" 
          document.getElementById("_timer_minutes").innerHTML = ""
          document.getElementById("_timer_seconds").innerHTML = ""
          document.getElementById("end").innerHTML = "TIME UP!!";
      }
  }, 1000);

  $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
    let category = '"Partner"';
    if(data.country_name === 'Bangladesh') {
      category = '"Wife"';
    } else if (data.country_name === 'United States') {
      category = '"Husband"';
    } 
    document.getElementById("category").innerHTML = category;
  });

  return (
    <div className="App">
        <h1 className="apps-name">Waiting Apps</h1>
       
        <div className="_sale_booster_countdown_wrap _sale-booster-countdown-bottom">
          <p className="_sale-booster-hits">
            You are waiting to meet your <span id="category"></span> and the time is left
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
            <img src="/images/2.jpg" alt="asdfas"/>
          </div>  
        </div>
    </div>
  );
}

export default App;
