import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  eatMango = () => {
    this.setState(prev => ({count1: prev.count1 + 1}))
  }

  eatBanana = () => {
    this.setState(prev => ({count2: prev.count2 + 1}))
  }

  render() {
    const {count1} = this.state
    const {count2} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1>
            Bob ate <span className="number">{count1}</span> mangoes{' '}
            <span className="number">{count2}</span> bananas
          </h1>
          <div className="second-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <button
                className="eat-button"
                type="button"
                onClick={this.eatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <button
                className="eat-button"
                type="button"
                onClick={this.eatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
