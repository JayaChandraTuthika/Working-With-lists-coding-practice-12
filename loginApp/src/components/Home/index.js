import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogged: false}

  changeStatus = () => {
    this.setState(prev => ({isLogged: !prev.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    let text
    let element

    if (isLogged) {
      text = 'Welcome User'
      element = <Logout event={this.changeStatus} />
    } else {
      text = 'Please Login'
      element = <Login event={this.changeStatus} />
    }

    return (
      <div className="bg-container">
        <div className="inner">
          <Message content={text} />
          {element}
        </div>
      </div>
    )
  }
}

export default Home
