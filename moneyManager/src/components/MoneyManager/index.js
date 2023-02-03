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

const initialHistoryList = []

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

  onDeleteHistoryItem = id => {
    const {historyList} = this.state

    const transactionItem = historyList.find(each => each.id === id)

    const newHistoryList = historyList.filter(each => each.id !== id)

    if (transactionItem.type === 'Income') {
      this.setState(prev => ({income: prev.income - transactionItem.amount}))
    } else {
      this.setState(prev => ({
        expenses: prev.expenses - transactionItem.amount,
      }))
    }

    this.setState({
      historyList: newHistoryList,
    })
  }

  onAddHistoryItem = event => {
    event.preventDefault()

    const {titleInput, amountInput, transactionTypeId, historyList} = this.state

    const transactionTypeObject = transactionTypeOptions.find(
      each => each.optionId === transactionTypeId,
    )

    const newHistoryItem = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: transactionTypeObject.displayText,
    }

    const newHistoryList = [...historyList, newHistoryItem]

    if (transactionTypeId === 'INCOME') {
      this.setState(prev => ({income: prev.income + parseInt(amountInput)}))
    } else {
      this.setState(prev => ({expenses: prev.expenses + parseInt(amountInput)}))
    }

    this.setState({
      historyList: newHistoryList,
      titleInput: '',
      amountInput: '',
      transactionTypeId: 'INCOME',
    })
  }

  render() {
    const {
      income,
      expenses,
      titleInput,
      amountInput,
      transactionTypeId,
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
              value={transactionTypeId}
              onChange={this.onTypeChange}
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
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
                  <TransactionItem
                    transactionDetails={each}
                    key={each.id}
                    onDeleteHistoryItem={this.onDeleteHistoryItem}
                  />
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
