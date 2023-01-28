import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  deductMoney = value => {
    const {amount} = this.state
    if (amount >= value) {
      this.setState(prev => ({amount: prev.amount - value}))
    }
  }

  render() {
    const {amount} = this.state

    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="inner">
          <div className="profile-container">
            <p className="profile-pic">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="profile-container">
            <p className="your-balance">your Balance</p>
            <div className="rupees-container">
              <p className="rupees-count">{amount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-container-heading">Withdraw</p>
            <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denominations-container">
            {denominationsList.map(each => (
              <DenominationItem
                value={each.value}
                deduct={this.deductMoney}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
