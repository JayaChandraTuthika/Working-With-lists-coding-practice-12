import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {cont1: false, cont2: false}

  showFirstname = () => {
    this.setState(prev => ({cont1: !prev.cont1}))
  }

  showLastname = () => {
    this.setState(prev => ({cont2: !prev.cont2}))
  }

  render() {
    const {cont1, cont2} = this.state

    let firstName
    let lastName

    if (cont1 === true) {
      firstName = <p className="container-1">Joe</p>
    } else {
      firstName = null
    }

    if (cont2 === true) {
      lastName = <p className="container-1">Jonas</p>
    } else {
      lastName = null
    }

    return (
      <div className="bg-container">
        <div className="inner">
          <h1 className="heading">Show/Hide</h1>
          <div className="flex-container">
            <div className="inner-container">
              <button
                type="button"
                className="show-hide-button"
                onClick={this.showFirstname}
              >
                Show/Hide Firstname
              </button>
              {firstName}
            </div>
            <div className="inner-container">
              <button
                type="button"
                className="show-hide-button"
                onClick={this.showLastname}
              >
                Show/Hide Lastname
              </button>
              {lastName}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
