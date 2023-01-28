import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {len: 0}

  countLetters = event => {
    this.setState({
      len: event.target.value.length,
    })
  }

  render() {
    const {len} = this.state

    return (
      <div className="bg-container">
        <div className="container-1">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label-input" htmlFor="inputText">
            Enter the phrase
          </label>

          <input
            type="text"
            id="inputText"
            className="input-text"
            onChange={this.countLetters}
            placeholder="Enter the phrase"
          />
          <p className="output-text">No.of letters: {len}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="banner-image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
