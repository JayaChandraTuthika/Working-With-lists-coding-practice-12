import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Dark'}

  changeMode = () => {
    this.setState(prev => {
      if (prev.mode === 'Dark') {
        return {mode: 'Light'}
      }
      return {mode: 'Dark'}
    })
  }

  render() {
    const {mode} = this.state

    let box
    if (mode === 'Dark') {
      box = (
        <div className="inner1">
          <h1 className="heading1">Click To Change Mode</h1>
          <button
            className="light-button"
            type="button"
            onClick={this.changeMode}
          >
            Light Mode
          </button>
        </div>
      )
    } else {
      box = (
        <div className="inner2">
          <h1 className="heading2">Click To Change Mode</h1>
          <button
            className="dark-button"
            type="button"
            onClick={this.changeMode}
          >
            Dark Mode
          </button>
        </div>
      )
    }

    return <div className="bg-container">{box}</div>
  }
}

export default LightDarkMode
