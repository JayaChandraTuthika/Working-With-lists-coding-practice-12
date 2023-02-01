import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialHistoryList = [
  {
    id: uuidv4(),
    title: 'car loan',
    amount: '20000',
    type: 'INCOME',
  },
]

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    historyList: initialHistoryList,
    titleInput: '',
    amountInput: '',
    transactionTypeId: 'INCOME',
  }

  onTitleInputChange = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onAmountInputChange = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onTypeChange = event => {
    this.setState({
      transactionTypeId: event.target.value,
    })
  }

  onAddHistoryItem = () => {
    const {titleInput, amountInput, transactionTypeId, historyList} = this.state

    const newHistoryItem = {
      title: titleInput,
      amount: amountInput,
      type: transactionTypeId,
    }

    const newHistoryList = [...historyList, newHistoryItem]

    this.setState({
      historyList: newHistoryList,
      titleInput: '',
      amountInput: '',
      tansactionTypeId: 'INCOME',
    })
  }

  render() {
    const {
      income,
      expenses,
      titleInput,
      amountInput,
      tansactionTypeId,
      historyList,
    } = this.state
    return (
      <div className="bg-container">
        <div className="first-container">
          <h1 className="first-container-heading">Hi, Richard</h1>
          <p className="first-container-para">
            Welcome back to your
            <span className="first-container-part-text">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} />
        <div className="third-container">
          <form className="form-container" onSubmit={this.onAddHistoryItem}>
            <h1 className="form-heading">Add Transaction</h1>
            <label htmlFor="titleInput" className="label">
              TITLE
            </label>
            <input
              id="titleInput"
              className="input"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.onTitleInputChange}
            />
            <label htmlFor="amountInput" className="label">
              AMOUNT
            </label>
            <input
              id="amountInput"
              className="input"
              placeholder="AMOUNT"
              value={amountInput}
              onChange={this.onAmountInputChange}
            />
            <label htmlFor="amountInput" className="label">
              TYPE
            </label>
            <select
              className="input"
              value={tansactionTypeId}
              onChange={this.onTypeChange}
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="inner-history-container">
              <div className="table-header">
                <p className="table-heading">Title</p>
                <p className="table-heading">Amount</p>
                <p className="table-heading">Type</p>
              </div>
              <ul className="list-container">
                {historyList.map(each => (
                  <TransactionItem transactionDetails={each} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
