import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHeads: true,
    headsCount: 0,
    tailsCount: 0,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({isHeads: true, headsCount: prev.headsCount + 1}))
    } else {
      this.setState(prev => ({isHeads: false, tailsCount: prev.tailsCount + 1}))
    }
  }

  render() {
    const {isHeads, headsCount, tailsCount} = this.state

    const imageElUrl = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="text-top">Heads (or) Tails</p>
          <img src={imageElUrl} className="toss-coin-image" alt="toss result" />
          <button className="toss-btn" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-text">Total: {headsCount + tailsCount}</p>
            <p className="result-text">Heads: {headsCount}</p>
            <p className="result-text">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
