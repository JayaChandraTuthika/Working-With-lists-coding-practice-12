import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const newCount = Math.ceil(Math.random() * 100)
    this.setState(prev => ({count: prev.count + newCount}))
  }

  render() {
    const {count} = this.state

    let text
    if (count % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }
    return (
      <div className="bg-container">
        <div className="inner">
          <h1 className="main-heading">Count {count}</h1>
          <p className="para">Count is {text}</p>
          <button
            className="increment-btn"
            onClick={this.increment}
            type="button"
          >
            Increment
          </button>
          <p className="last-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
