import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeState = () => {
    this.setState(prev => ({isSubscribed: !prev.isSubscribed}))
  }

  changeButton = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      return (
        <button type="button" onClick={this.changeState}>
          Subscribed
        </button>
      )
    }

    return (
      <button type="button" onClick={this.changeState}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {this.changeButton()}
      </div>
    )
  }
}

export default Welcome
