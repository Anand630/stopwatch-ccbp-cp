import {Component} from 'react'
import './index.css'

export default class StopWatch extends Component {
  state = {secondsCount: 0,isTimerRunning: false}

  
  tick = () =>(
        this.setState(prevState => ({secondsCount: prevState.secondsCount + 1,  isTimerRunning: true})
         )


  onStart = () => this.timerId = setInterval(this.tick, 1000)
  
  

  onStop = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, secondsCount: 0})
  }

  render() {
    const { secondsCount} = this.state
    const minutes = Math.floor(secondsCount/60)
    const seconds = secondsCount % 60

    console.log(this.state)
    return (
      <div className="home-container">
        <div className="all-item-container">
          <h1 className="stopwatch-text">Stopwatch</h1>
          <div className="stop-watch-card-container">
            <div className="clock-logo-and-timer-text">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                className="clock-logo"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="timer-display">
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
            <div className="buttons-container">
              <button
                onClick={this.onStart}
                type="button"
                className="start-button"
              >
                Start
              </button>
              <button
                onClick={this.onStop}
                type="button"
                className="stop-button"
              >
                Stop
              </button>
              <button
                onClick={this.onReset}
                type="button"
                className="reset-button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
