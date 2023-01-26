import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  //   onIncrement = () => {
  //     this.setState(prevState => ({count: prevState.count + 1}))
  //   }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-text">
          The Button has been clicked
          <span className="number"> {count}</span> times
        </h1>
        <p className="bottom-text">Click the button to Increase the count</p>
        <button className="click-btn" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
