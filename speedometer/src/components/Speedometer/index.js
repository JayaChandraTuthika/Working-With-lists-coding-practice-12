import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  increaseSpeed = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prev => ({count: prev.count + 10}))
    }
  }

  decreaseSpeed = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prev => ({count: prev.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="main-para">Speed is {count}mph</h1>
        <p className="bottom-text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn1" onClick={this.increaseSpeed} type="button">
            Accelerate
          </button>
          <button className="btn2" onClick={this.decreaseSpeed} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
